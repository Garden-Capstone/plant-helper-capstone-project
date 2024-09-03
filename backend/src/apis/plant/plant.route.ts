import {Router} from "express";
import {getAllPlants} from "./plant.controller";


const basePath = '/apis/plant';

const router = Router();

router.route('/').get(getAllPlants)

export const plantRoute = {basePath, router}