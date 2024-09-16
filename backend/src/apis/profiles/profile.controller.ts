import {
    PrivateProfile,
    PublicProfileSchema,
    selectPrivateProfileByProfileId,
    selectProfileByProfileId,
    updateProfile
} from "./profile.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";


export async function getProfileByProfileIdController(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const validationResult = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {profileId} = validationResult.data

        const data = await selectProfileByProfileId(profileId)

        return response.json({status: 200, message: null, data})
    } catch (error: unknown) {
        console.error(error)
        return response.json({status: 500, message: "internal server error", data: null})
    }
}


export async function putProfileController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        //validate the updated profile data coming from the request body
        const validationResultForRequestBody = PublicProfileSchema.safeParse(request.body)

        // if the validation of the body is unsuccessful, return a preformatted response to the client
        if(!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        // validate the profileId coming from the request parameters
        const validationResultForRequestParams = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        // if the validation of the params is unsuccessful, return a preformatted response to the client
        if(!validationResultForRequestParams.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }

        //grab the profileId from the session
        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId

        //grab the profileId off of the validated request parameters
        const {profileId} = validationResultForRequestParams.data

        if (profileIdFromSession !== profileId) {
            return response.json({status: 400, message: "you cannot update a profile that is not yours", data: null})
        }

        //grab the profile data off of the validated request body
        const {profileGoal, profileImage, profileUsername} = validationResultForRequestBody.data

        //grab the profile by profileId
        const profile: PrivateProfile|null = await selectPrivateProfileByProfileId(profileId)


        //if the profile does not exist, return a preformatted response to the client
        if(profile === null) {
            return response.json({status: 400, message: "profile does not exist", data: null})
        }

        //update the profile with the new data
        profile.profileGoal = profileGoal
        profile.profileImage = profileImage
        profile.profileUsername = profileUsername

        //update the profile in the database
        await updateProfile(profile)

        //return a response to the client with a success message
        return response.json({status: 200, message: "profile successfully updated", data: null})


    } catch (error: unknown) {
        // if an error occurs, return a preformatted response to the client
        return response.json({status: 500,message: "internal server error", data: null})
    }
}