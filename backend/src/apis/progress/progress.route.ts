import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {
    getProgressByProgressIdController,
    getProgressByProgressLockerIdController,
    postProgressController
} from "./progress.controller";

const basePath = '/apis/progress';

const router = Router();

router.route('/progressByProfileId/progress/:profileId')
router.route('/').post(isLoggedInController, postProgressController)
router.route('/progressByLockerId/progress/:progressId')



export const progressRoute = {basePath, router}


router.route('/:progressId')
.get(getProgressByProgressIdController, getProgressByProgressLockerIdController)
    .post(getProgressByProgressIdController, getProgressByProgressLockerIdController)


