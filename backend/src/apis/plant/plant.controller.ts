
import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllPlants, selectPlantByPlantId, selectPlantByPlantSpecies, selectPlantsByPlantName} from "./plant.model";
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

export async function getPlantByPlantId(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({ message: 'Please provide a valid Plant Id' }).safeParse(request.params.plantId);
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error);
        }
        const plantId = validationResult.data;
        const data = await selectPlantByPlantId(plantId);
        return response.json({ status: 200, message: null, data });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ status: 500, message: 'Error getting plant, try again.', data: [] });
    }
}



    export async function getPlantByPlantName (request: Request, response: Response) : Promise<Response<Status>> {

    try {
            const validationResult = z.string({
                required_error: 'please provide a valid plant name',
                invalid_type_error: "plantName must be a string"
            }).safeParse(request.params.plantName)

            if (!validationResult.success) {
                return zodErrorResponse(response, validationResult.error)
            }

            const plantName = validationResult.data
            const data = await selectPlantByPlantId(plantName)
            return response.json({status: 200, message: null, data})

        } catch (error) {
            return response.json({
                status: 500,
                message: '',
                data: []
            })
        }
    }

export async function getPlantsByPlantName (request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const validationResult = z.string({
            required_error: 'please provide valid plant names',
            invalid_type_error: "plantName must be a string"
        }).safeParse(request.params.plantName)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const plantName = validationResult.data
        const data = await selectPlantsByPlantName(plantName)
        return response.json({status: 200, message: null, data})

    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Error getting plants. Try again.',
            data: []
        })
    }
}

export async function getPlantByPlantSpecies(request: Request, response: Response) : Promise<Response<Status>> {

    try {
     const validationResult = z.string({
     required_error: 'please provide a valid plant species',
     invalid_type_error: "plant species must be a string"
        }).safeParse(request.params.plantSpecies)

     if (!validationResult.success) {
         return zodErrorResponse(response, validationResult.error)
     }

     const plantSpecies = validationResult.data
     const data = await selectPlantByPlantSpecies(plantSpecies)
     return response.json({status: 200, message: null, data})

 } catch (error) {
     return response.json({
         status: 500,
         message: '',
         data: []
     })
 }
}


export async function getPlantsByPlantQuestionnaire(request: Request, response: Response): Promise<Response<Status>> {
    const { sunlight, watering, growthRate } = request.query;
    try {
        const plantRepository = AppDataSource.getRepository(Plant);
        const queryBuilder = plantRepository.createQueryBuilder('plant');
        if (sunlight) {
            queryBuilder.andWhere('plant.plantSunlight IN (:...sunlight)', { sunlight: (sunlight as string).split(',') });
        }
        if (watering) {
            queryBuilder.andWhere('plant.plantWatering = :watering', { watering });
        }
        if (growthRate) {
            queryBuilder.andWhere('plant.plantGrowthRate = :growthRate', { growthRate });
        }
        const plants = await queryBuilder.getMany();
        return response.json({ status: 200, message: null, data: plants });
    } catch (error) {
        console.error('Error fetching plants:', error);
        return response.status(500).json({ status: 500, message: 'An error occurred while fetching plants.', data: [] });
    }
}


