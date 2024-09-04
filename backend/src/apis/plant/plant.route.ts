import {Router} from "express";
import {getAllPlants, getPlantByPlantId, getPlantByPlantName, getPlantsByPlantName} from "./plant.controller";


const basePath = '/apis/plant';

const router = Router();

router.route('/').get(getAllPlants)

router.route('/:plantId').get(getPlantByPlantId)

router.route('/plantByName/plantName/:plantName').get(getPlantByPlantName)

router.route('/:plantName').get(getPlantsByPlantName)

export const plantRoute = {basePath, router}

