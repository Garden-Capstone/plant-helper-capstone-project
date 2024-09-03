
import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlants} from "./plant.model";


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