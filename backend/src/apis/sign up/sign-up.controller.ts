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

        const {profileEmail, profilePassword, profileUsername} = request.body

        const profileHash = await setHash(profilePassword)

        const profileActivationToken = setActivationToken()

        const profileImage = '"https://images.unsplash.com/photo-1611866759729-0cba525f9b45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100"'

        const basePath: string = `${request.protocol}://${request.hostname}:8080{request.originalUrl}activation/${profileActivationToken}`

        const message = `<h2>Welcome to Rethreads.</h2>
            <p>In order to start posting threads of cats you must confirm your account.</p>
            <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: profileEmail,
            subject: 'One step closer to Sticky Head -- Account Activation',
            html: message
        }

        const profile: PrivateProfile = {
            profileId: '',
            profileActivationToken,
            profileUsername,
            profileImage,
            profileGoal: null,
            profileEmail,
            profileHash
        }

        await insertProfile(profile)

        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'Profile successfully created please check your email.',
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

