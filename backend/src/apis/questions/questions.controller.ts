import {Request, Response} from "express";
import {
    insertProgress,
    Progress,
    ProgressSchema,
    selectProgressByProgressId,
    selectProgressByProgressLockerId
} from "../progress/progress.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {PublicProfile} from "../profiles/profile.model";
import {selectLockerByLockerId} from "../locker/locker.model";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";

export async function selectPlantByPlantWateringController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        // validate the incoming request with the progress schema
        const validationResult = ProgressSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue on with ProgressThreadController logic below this line

        // get the progress content, progressNote, and progressImageURL from the request body
        const {progressNote, progressId, progressImageUrl, progressLockerId } = validationResult.data

        // get the profile from the session
        const profile: PublicProfile = request.session.profile as PublicProfile

        // set the progress profile id to the profile id from the session
        const progressProfileId: string = profile.profileId as string

        const locker = await selectLockerByLockerId (progressLockerId)
        if(!locker.lockerProfileId === profile.profileId) {
            return response.json({status: 401, message: 'you must be logged in to add progress', data: null})
        }


        // create a new progress object with the progressProfileId, progressReplyThreadId, progressContent, and progressImageUrl
        const progress: Progress = {
            progressId: null,
            progressLockerId,
            progressNote,
            progressDateTime: null,
            progressImageUrl
        }

        // insert progress into the database and store the result in a variable called result
        const result = await insertProgress(progress)

        // return the response with the status code 200, a message, and the result as data
        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error creating thread. Try again.', data: null})
    }
}

/**
 *
 * @param request from the client to the server get progress by progressId
 * @param response from the server to the client with a progress by progressId or an error message
 */

export async function getProgressByProgressIdController(request: Request, response: Response) : Promise<Response<Status>> {

    try {

        const validationResult = z.string().uuid({message: 'please provide a valid progressId'}).safeParse(request.params.progressId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const progressId = validationResult.data

        const data = await selectProgressByProgressId(progressId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 *
 * @param request from the client to the server to get all progress by progressLockerId
 * @param response from the server to the client with all progress by progressLockerId or an error message
 */

export async function getProgressByProgressLockerIdController(request: Request, response: Response) : Promise<Response<Status>>{
    try {
        const validationResult = z.string({
            required_error: 'please provide a valid locker id to access progress',
            invalid_type_error: "lockerId must be a string"
        }).safeParse(request.params.progressLockerId)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const progressLockerId = validationResult.data
        const data = await selectProgressByProgressLockerId(progressLockerId)
        return response.json( {status: 200, message: null, data})
    } catch (error) {

        return response.json( {
            status: 500,
            message: '',
            data: []
        })
    }
}

