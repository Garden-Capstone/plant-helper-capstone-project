"use client"

import React from "react";
import {z} from "zod";
import {Button, Label, TextInput} from "flowbite-react";
// import{DisplayError} from "@/app/components/DisplayError";
// import{DisplayStatus} from "@/app/components/DisplayStatus";
import Link from "next/link";
import {Formik} from "formik";
import {useRouter} from "next/navigation";


const formSchema= z.object ({
    profileUsername: z.string({required_error:"Profile username is required", invalid_type_error:"Please provide a valid username"})
        .trim()
        .min(1,{message:"Please provide a valid username (min 1 character long)"})
        .max(32, {message:"Please provide a valid username (max 32 character long)"}),


    profileEmail: z.string({required_error:"Please provide a valid email to sign in", invalid_type_error:"Please provide a valid email to sign in"})
        .email("Please provide a valid email to sign in")
        .max(255, {message:"Please provide a valid email with a max length of 255"}),


        profileGoal: z.string({required_error:"Please select a goal from the drop down menu", invalid_type_error:"Please select a goal form the drop down menu"}),

    profilePassword: z.string({required_error:"Please provide a valid password to sign in", invalid_type_error:"Please provide a valid password to sign in"})
    .min(8, {message:"Please provide a password with a minimum 8 characters"})
    .max(32, {message:"Please provide a password with a maximum 32 characters"}),


        profilePasswordConfirm: z.string({required_error:"Please confirm your password, passwords must match", invalid_type_error:"Please confirm your password, passwords must match"})
            .min(8, {message:"Please provide a password with a minimum 8 characters"})
            .max(32, {message:"Please provide a password with a maximum 32 characters"}),

    }
)
.refine(data=> data.profilePassword === data.profilePasswordConfirm, {message:"passwords do not match"})


type FormSchema = z.infer<typeof formSchema>

export default function form (){
    const initialValues = {
        profileEmail: '',
        profilePassword: '',
        profileGoal: '',
        profilePasswordConfirm: '',
        profileUsername: '',
        profileImage: ''
    }

}

