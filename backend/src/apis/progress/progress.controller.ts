import {z} from "zod";
import {selectProgressByProgressId, insertProgress, updateProgress, selectProgressByProgressLockerId} from "./progress.model";
import {Response, Request} from "express";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";

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



