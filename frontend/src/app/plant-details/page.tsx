"use client";

import { FloatingLabel, Navbar, Footer } from "flowbite-react";
import {PiPottedPlantBold} from "react-icons/pi";


export default function Details() {
    return (
        <>
        <div className="bg-[#F9F7EF] max-h-full font-sans">
        {/*Navbar*/}
        <Navbar fluid rounded className="bg-[#2C6E49]">
            <Navbar.Brand className="text-2xl sm:text-3xl md:text-4xl" href="/">
                <PiPottedPlantBold className="text-[#F9F7EF]"/>
                <span className="self-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F9F7EF] font-serif">
                    Plant Whisperer
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 items-center space-x-4">
                <div className="hidden md:block text-[#F9F7EF]">
                    <FloatingLabel
                        variant="outlined"
                        label="Search"
                        style={{ width: '300px' }}
                        className="bg-[#2C6E49] text-[#F9F7EF] hover:text-[#F9F7EF] focus:text-[#F9F7EF] focus:ring-4 focus:ring-[#F9F7EF]"/>
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
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Home</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Login</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Sign Up</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF] navbar-link" href="#">Questionnaire</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>


        {/*Image Placeholder*/}
        <div className="mx-14 mt-12 float-left bg-[#DAA520]">
            <img
                src="https://images.unsplash.com/photo-1701266501377-27f4d58c15cd?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Placeholder Image"
                style={{ width: '500px', height: '500px', objectFit: 'cover' }}
            />
        </div>

        {/*Plant Name and Description*/}
    <div className="bg-[#F9F7EF]">
        <div className="text-2xl md:text-7xl mt-36 ml-14 text-[#2C6E49] bg-[#F9F7EF]">
            <span>Plant Name </span>
            <div className="text-xl md:text-4xl md:ml-14 text-[#E5C062]">
                <span>Plant Scientific Name</span>
            </div>
        </div>
        <div className="mx-14 mt-9 md:text-lg text-sm bg-[#F9F7EF] text-[#2C6E49]">
            <span>This is a placeholder paragraph for the plant description. The rest is just a bob ross ipsum. Don't hurry. Take your time and enjoy. A thin paint will stick to a thick paint. Don't forget to tell these special people in your life just how special they are to you. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. A tree needs to be your friend if you're going to paint him. You have to make those little noises or it won't work.</span>
        </div>
    </div>

            <Footer container className="bg-[#DAA520] p-6">
                <Footer.Copyright className="text-[#F9F7EF]" href="#" by="PlantWhisperer™" year={2024} />
                <Footer.LinkGroup className="text-[#F9F7EF]">
                    <Footer.Link href="#">Home</Footer.Link>
                    <Footer.Link href="/login">Login</Footer.Link>
                    <Footer.Link href="#">Sign Up</Footer.Link>
                    <Footer.Link href="#">Questionnaire</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
        </>
    );
}