'use client'


import {Button, Card} from "flowbite-react";
import {PiPottedPlantBold} from "react-icons/pi";
import React from "react";

export default function TopSection() {
    return (
        <>
            <div
                className="fixed inset-0 bg-local top-0 left-0 right-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: '-1'
                }}
            ></div>
            <Card className="flex max-w-lg mx-auto mt-20 overflow-hidden bg-white bg-opacity-90 shadow-2xl">
                <div className="flex justify-center pt-16 text-[#2E8B57] text-4xl md:text-5xl font-serif">
                    <PiPottedPlantBold className="text-[#2E8B57]"/>
                    <p>Plant Whisperer</p>
                </div>
                <div>
                    <p className="flex justify-center pb-14 text-[#2E8B57] font-bold">Helping Build Relationships Between Plants and People!</p>
                </div>
                <a href="/login">
                <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371] w-full">
                    LogIn! Welcome Back
                </Button>
                </a>
                <a href="/questions">
                <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371] w-full">
                    I have a plant
                    and would like to learn more
                </Button>
                </a>
                <a href="/questions">
                <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371] w-full">
                    I do not have a plant
                    but I would like to
                </Button>
                </a>
            </Card>
        </>
    );
}





