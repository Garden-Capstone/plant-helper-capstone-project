'use client'
import React from "react";
import {Button} from "flowbite-react"

export default function LoginButton() {
    return (
        <div className="flex gap-4 items-center">
            <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371]">
                LogIn Welcome Back
            </Button>
        </div>
    );
}
