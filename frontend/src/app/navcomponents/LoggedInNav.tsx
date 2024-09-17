'use client'
import { Navbar} from "flowbite-react";
import {PiPottedPlantBold} from "react-icons/pi";
import React, {useState} from "react";
import {SearchForm} from "@/app/search-results/SearchForm";



export function LoggedInNav() {

    const [profilePic] = useState('https://images.unsplash.com/photo-1611866759729-0cba525f9b45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100g');

    return (
        <>
            <Navbar fluid rounded className="bg-[#2C6E49]">
                <Navbar.Brand className="text-2xl sm:text-3xl md:text-4xl" href="/">
                    <PiPottedPlantBold className="text-[#F9F7EF]"/>
                    <span
                        className="self-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F9F7EF] font-serif">Plant Whisperer
                        </span>
                </Navbar.Brand>
                <div className="flex md:order-2 items-center space-x-4">
                    <div className="hidden md:block text-[#F9F7EF]">
                        <SearchForm/>
                    </div>
                    <svg
                        className="w-6 h-6 text-[#2C6E49] md:hidden"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                    <Navbar.Toggle/>
                    <div className="md:flex items-center">
                        <a href="/plant-locker">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-14 h-14 rounded-full border-2 border-[#F9F7EF] hover:border-4 object-cover cursor-pointer"/>
                        </a>
                    </div>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link className="text-[#F9F7EF] text-lg md:text-lg md:py-2 navbar-link"
                                 href="/">Home</Navbar.Link>
                    <Navbar.Link className="text-[#F9F7EF] text-lg md:text-lg md:py-2 navbar-link"
                                 href="/questions">Questionnaire</Navbar.Link>
                    <Navbar.Link className="text-[#F9F7EF] text-lg md:text-lg md:py-2 navbar-link"
                                 href="/settings">Settings</Navbar.Link>
                    <div className="text-[#F9F7EF] mt-2 md:hidden">
                        <SearchForm/>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}