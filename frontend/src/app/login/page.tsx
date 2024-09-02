"use client"
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react"
import {PiPottedPlantBold} from "react-icons/pi";

export default function Login() {
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
                <div className="flex justify-center pt-16 text-[#2E8B57] text-5xl font-serif">
                    <PiPottedPlantBold className="text-[#2E8B57]"/>
                    <p>Plant Whisperer</p>
                </div>
                <div>
                    <p className="flex justify-center pb-14 text-[#2E8B57] font-bold">Replanting Your Garden Goals? Log In!</p>
                </div>
                <form className="flex flex-col gap-4 items-center">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" className="text-[#2E8B57] text-md font-bold"/>
                        </div>
                        <TextInput className="w-96" id="email1" type="email" placeholder="email" required/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" className="text-[#2E8B57] text-md font-bold"/>
                        </div>
                        <TextInput className="w-96" id="password1" type="password" placeholder="password" required/>
                    </div>
                    <Button className="w-60 mt-10 py-2 bg-[#2E8B57] enabled:hover:bg-[#2c6e49]" type="submit">
                        Sprout Back In!
                    </Button>
                    <div className="mt-7 mb-8 text-sm">
                        <span>Don't have an account? </span>
                        <a href="/" className="text-[#FF9999] hover:text-[#f7b8b7] font-bold">Sign up </a>
                        <span>and Dig In!</span>
                    </div>
                </form>
            </Card>
        </>
    );
}