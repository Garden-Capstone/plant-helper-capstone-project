import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";
import {insertLocker, Locker, LockerSchema, selectLockersByLockerId, selectLockersByProfileId} from "./locker.model";


export async function getLockersByProfileId(request : Request, response : Response) : Promise<Response<Status>> {

        try {
        const validationResult = z.string ({
            required_error : 'Please provide a valid Profile Id',
            invalid_type_error: "Profile Id must be a UUID"
        }).uuid({message: 'Please provide a valid UUID'}).safeParse(request.params.profileId)

            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }
            const profileId = validationResult.data
            const data = await selectLockersByProfileId(profileId)
            return response.json({status: 200, message: null, data})
        } catch (error) {
            return response.json({
                status: 500,
                message : '',
                data: []
            })
        }
}

// post controller for insertLocker

export async function postLockerController(request : Request, response : Response) : Promise<Response<Status>> {
        try {
            const validationResult = LockerSchema.safeParse(request.body)
            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }
            const lockerProfileId = request.session?.profile?.profileId ?? ''
            const {lockerId, lockerPlantId, lockerImageUrl, lockerName} = validationResult.data

            const locker : Locker = {
                lockerId,
                lockerProfileId,
                lockerPlantId,
                lockerImageUrl,
                lockerName
            }

            const result = await insertLocker(locker);

            const status: Status = {
                status: 200,
                message: result,
                data: null
            }

            return response.json(status)
        } catch (error) {
            console.log(error)
            return response.json({
                status: 500,
                message: 'Error creating Locker, please try again',
                data: null
            })
        }
}

export async function getLockerbyLockerId(request : Request, response : Response) : Promise<Response<Status>> {

    try {
        const validationResult = z.string({
            required_error: 'Please provide a valid Locker ID',
            invalid_type_error: 'Locker Id must be a UUID'
        }).uuid({message: 'Please provide a valid UUID'}).safeParse(request.params.lockerId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
            const lockerId = validationResult.data
            const data = await selectLockersByLockerId(lockerId)
            return response.json({status: 200, message: null, data})

        } catch (error) {
            return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}