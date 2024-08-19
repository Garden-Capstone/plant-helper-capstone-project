"use client";
import { useState } from "react";
import { Button, Navbar } from "flowbite-react";


export default function Settings() {

    {/* Profile Picture */}
    const [profilePic, setProfilePic] = useState("https://via.placeholder.com/100");
    const [file, setFile] = useState(null);


    return (
        <>
            {/*Navbar*/}
            <Navbar fluid rounded className="justify-between">
            <Navbar.Brand className="relative">
                <a href="#">
                    <svg className="w-10 h-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m15 19-7-7 7-7"/>
                    </svg>
                </a>
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
              <div className="flex flex-col items-center mx-16 my-16">
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


        </>

);
}