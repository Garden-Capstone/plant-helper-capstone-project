import { Router } from 'express';
import {
    getProgressByProgressIdController,
  getProgressByProgressLockerIdController
} from "./progress.controller";




// declaring a basePath for this router
const basePath = '/apis/progress'



// creating a new router object
const router = Router();

//define route for this router



router.route('/:progressId')
.get(getProgressByProgressIdController, getProgressByProgressLockerIdController)
    .post(getProgressByProgressIdController, getProgressByProgressLockerIdController)


export const progressRoute = {basePath, router}