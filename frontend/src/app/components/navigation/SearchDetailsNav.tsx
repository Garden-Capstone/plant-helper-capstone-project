'use client'
import {FloatingLabel, Navbar} from "flowbite-react";
import {PiPottedPlantBold} from "react-icons/pi";
import {SearchForm} from "@/app/search-results/SearchForm";
import React from "react";


export function SearchDetailsNav() {

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

                {/*new search bar*/}
                <SearchForm/>

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
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Home</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Login</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Sign Up</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Questionnaire</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}