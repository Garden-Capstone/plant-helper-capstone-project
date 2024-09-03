import {Router} from "express";
import {getAllPlants, getPlantByPlantId} from "./plant.controller";


const basePath = '/apis/plant';

const router = Router();

router.route('/').get(getAllPlants)

router.route('/:id').get(getPlantByPlantId)

export const plantRoute = {basePath, router}
