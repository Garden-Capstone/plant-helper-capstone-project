
import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlants, selectPlantByPlantId} from "./plant.model";
import {z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";


export async function getAllPlants(request: Request, response: Response) : Promise<Response<Status>> {

    try {
        const data = await selectAllPlants()
        const status : Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        console.error(error)
        return response.json({
            status:500,
            message: 'Error getting plants, try again.',
            data: []
        })
    }
}

export async function getPlantByPlantId(request: Request, response: Response) : Promise<Response<Status>> {

    try {
        const validationResult = z.string().uuid({ message: 'Please provide a valid Plant Id'}).safeParse(request.params.plantId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const plantId = validationResult.data
        const data = await selectPlantByPlantId(plantId)
        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json({
            status:500,
            message:'',
            data: []
        })
    }
}