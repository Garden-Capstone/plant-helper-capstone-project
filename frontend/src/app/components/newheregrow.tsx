'use client'
import React from "react";
import {Button} from "flowbite-react"


export function NewHereGrow() {
    return (
        <div className="flex gap-4 items-center">
            <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371]">
                I do not have a plant
                but I would like to
            </Button>
        </div>
    );
}
