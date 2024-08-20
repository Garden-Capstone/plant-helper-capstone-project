"use client";
import { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import Link from "next/link";


export default function Settings() {

    {/* Profile Picture */}
    const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");
    const [file, setFile] = useState(null);


    return (
        <>
        {/*Navbar*/}
        <Navbar fluid rounded className="justify-between">
            <Navbar.Brand className="relative">
                <Link href="/">
                    <svg className="w-9 h-9 text-gray-800 "
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m15 19-7-7 7-7"/>
                    </svg>
                </Link>
            </Navbar.Brand>

            <div className="flex-1 flex items-center mr-10 justify-center">
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-2xl font-semibold">
                        Edit Profile
                    </span>
                </Navbar.Brand>
            </div>
        </Navbar>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mx-14 my-10">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-40 h-40 rounded-full border-2 border-gray-300"
                />

                <div>
                    <label htmlFor="file-input">
                        <Button
                            className="text-sm mt-12"
                            aria-label="Change Profile Picture">Change Picture
                        </Button>
                    </label>
                </div>
            </div>
        </div>


        {/* Form Section */}
        <div className="flex max-w-xl flex-col mx-auto gap-7">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="small"
                        className="text-md"
                        value="First Name"/>
                </div>
                <textarea
                    id="small"
                    className="p-2 border rounded-lg w-full h-11 bg-gray-50 border-gray-300 resize-none overflow-hidden"
                    placeholder="Enter first name here.."/>
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="small"
                        className="text-md"
                        value="Last Name"/>
                </div>
                <textarea
                    id="small"
                    className="p-2 border rounded-lg w-full h-11 bg-gray-50 border-gray-300 resize-none overflow-hidden"
                    placeholder="Enter last name here.."/>
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="large"
                        className="text-md"
                        value="What are your plant goals?"/>
                </div>
                <textarea
                    id="large"
                    className="p-4 mb-4 rounded-lg border border-gray-300 w-full h-32 bg-gray-50 resize-none overflow-hidden"
                    placeholder="Enter your goals here..."/>
            </div>
        </div>

            {/* Save Changes Button */}
        <div className="flex flex-col items-center justify-center">
            <label htmlFor="file-input">
                <Button
                    className="text-sm flex flex-col items-center mx-14 my-10"
                    aria-label="Change Profile Picture">Save Changes
                </Button>
            </label>
        </div>

        </>
    );
}