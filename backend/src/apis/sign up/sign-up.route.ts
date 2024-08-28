import express, {Router} from "express";
import {signupProfileController} from "./sign-up.controller";


const basePath = '/apis/sign-up'

const router = Router()


router.route('/').post(signupProfileController)

function activationController() {

}

// router.route('/activation/:activation').get(avtivationController)

export const signUpRoute = { basePath, router}