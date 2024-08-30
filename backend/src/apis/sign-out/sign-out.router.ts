import {signOutController} from "./sign-out.controller";
import {Router} from "express";


const basePath = '/apis/sign-out'
const router =Router()

router.route('/').get(signOutController)

export const signOutRoute = { basePath, router}