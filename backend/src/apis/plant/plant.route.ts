import {Router} from "express";
import {
    getAllPlants,
    getPlantByPlantId,
    getPlantByPlantName,
    getPlantByPlantSpecies,
    getPlantsByPlantName,
    getPlantsByPlantQuestionnaire
} from "./plant.controller";


const basePath = '/apis/plant';

const router = Router();

router.route('/').get(getAllPlants)

router.route('/:plantId').get(getPlantByPlantId)

router.route('/plantByName/plantName/:plantName').get(getPlantByPlantName)

router.route('/plantBySpecies/plantSpecies/:plantSpecies').get(getPlantByPlantSpecies)

router.route('/:plantName').get(getPlantsByPlantName)

export const plantRoute = {basePath, router}

function getPlantByPlantQuestionnaire() {

}

router.route('/api/plant/plant.model').get(getPlantsByPlantQuestionnaire)

