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

router.route('/plantByName/:plantName').get(getPlantByPlantName)

router.route('/plantBySpecies/plantSpecies/:plantSpecies').get(getPlantByPlantSpecies)

router.route('/plantsByName/:plantName').get(getPlantsByPlantName)

export const plantRoute = {basePath, router}

router.route('/plants/questionnaire').post(getPlantsByPlantQuestionnaire)
