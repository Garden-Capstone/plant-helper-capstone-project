'use client'
import {Navbar} from "flowbite-react";
import { useEffect, useState } from 'react';

export function ProfileNav() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, []);

    return (
        <>
            {/*Navbar*/}
            <Navbar fluid rounded className="justify-between bg-[#2c6e49]">
                <Navbar.Brand className="relative">
                    {isClient && (
                    <a href="/plant-locker">
                        <svg
                            className="w-9 h-9 text-[#f9f7ef]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m15 19-7-7 7-7"/>
                        </svg>
                    </a>
                    )}
                </Navbar.Brand>
                <div className="flex-1 flex items-center mr-7 justify-center">
                    <Navbar.Brand>
                        <span className="self-center whitespace-nowrap text-2xl text-[#f9f7ef] font-semibold">Settings</span>
                    </Navbar.Brand>
                </div>
            </Navbar>

        </>
    )
}