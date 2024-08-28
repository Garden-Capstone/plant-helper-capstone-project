import { Request, Response } from 'express'
import formData from 'form-data'
import {SignUpProfileSchema} from "./sign-up.valitator";
import {zodErrorResponse} from "../../utils/response.utils";
import Mailgun from "mailgun.js";
import {setHash, setActivationToken} from "../../utils/auth.utils";
import {insertProfile, PrivateProfile} from "../profiles/profile.model";
import {Status} from "../../utils/interfaces/Status";


export async function signupProfileController (request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = SignUpProfileSchema.safeParse(request.body)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})

        const {profileName, profileEmail, profilePassword, profileUsername} = request.body

        const profileHash = await setHash(profilePassword)

        const profileActivationToken = setActivationToken()

        const profileImageUrl = 'http://placekitten.com/300/300'

        const basePath: string = `${request.protocol}://${request.hostname}:8080{request.originalUrl}activation/${profileActivationToken}`

        const message = `<h2>Welcome to Rethreads.</h2>
            <p>In order to start posting threads of cats you must confirm your account.</p>
            <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            html: message
        }

        const profile: PrivateProfile = {
            profileId: '',
            profileName,
            profileActivationToken,
            profileUsername,
            profileImage: null,
            profileGoal: null,
            profileEmail,
            profileHash
        }

        await insertProfile(profile)

        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'Profile successfully created please check you email.',
            data: null
        }
        return response.json(status)
    } catch (error: any) {
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        }
        return response.json(status)
    }
}

