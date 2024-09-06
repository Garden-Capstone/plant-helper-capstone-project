import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";
import {selectLockerByProfileId} from "./locker.model";


export async function getLockerByProfileId(request : Request, response : Response) : Promise<Response<Status>> {

        try {
        const validationResult = z.string ({
            required_error : 'Please provide a valid Profile Id',
            invalid_type_error: "Profile Id must be a UUID"
        }).uuid({message: 'Please provide a valid UUID'})

            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }
            const profileId = validationResult.data
            const data = await selectLockerByProfileId(profileId)
            return response.json({status: 200, message: null, data})
        } catch (error) {
            return response.json({
                status: 500,
                message : '',
                data: []
            })
        }
}