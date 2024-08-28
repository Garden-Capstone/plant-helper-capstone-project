import express, {Router} from "express";
import {signupProfileController} from "./sign-up.controller";


const basePath = '/apis/sign-up'

const router = Router()

function signUpProfileController() {

}

router.route('/').post(signUpProfileController)

function avtivationController() {

}

router.route('/activation/:activation').get(avtivationController)

export const signUpRoute = { basePath, router}