import {Router} from "express";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {postLockerController} from "./locker.controller";


const basePath = '/apis/locker';

const router = Router();

router.route('/lockerByProfileId/locker/:profileId')
router.route('/').post(isLoggedInController, postLockerController)


export const lockerRoute = {basePath, router}
