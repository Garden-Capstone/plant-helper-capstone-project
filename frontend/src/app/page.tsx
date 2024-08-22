"use client"
import {Navbar} from "flowbite-react"

import Link from "next/link";

import Form from "flowbite-react"

export default function Home() {
    return (

        <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="https://flowbite-react.com">

                <span
                    className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Plant Whisperer</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Search</Navbar.Link>
                <Navbar.Link href="#">Login</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

    )
}


function App() {
    return (
        <div style={{
            backgroundImage: `url("https://unsplash.com/photos/a-potted-plant-sitting-on-top-of-a-table-yBEsu2qYqSY")`
        }}>
            Hello World
        </div>
    );
}


https://unsplash.com/photos/a-potted-plant-sitting-on-top-of-a-table-yBEsu2qYqSY
// import plantPic from "./plant-pic.png";
//
// export default function home() {
//
//     return <img src={plantPic} alt="picture of plant" />
// }

// import plantPic from './plant-pic.png'
//
// export default function App() {
//     return <div style={{ "backgroundImage": plantpic }}>Overlay text</div>
// }

// this is the end of the nav bar section
//
// <div
//     className="absolute insert-0 bg-local"
//     style={
//     backgroundImage:""
//
//     }
{

}

// this is the start of the button section

import React from "react";
import {Button} from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex gap-4 items-center">
            <Button size="lg">
                Log In Welcome Back
            </Button>
        </div>
    );
}

export default function App() {
    return (
        <div className="flex gap-4 items-center">
            <Button size="lg">
                New Here I already have a plant and want to learn more
            </Button>
        </div>
    );
}

export default function App() {
    return (
        <div className="flex gap-4 items-center">
            <Button size="lg">
                I do not have a plant but I would like to
            </Button>
        </div>
    );
}


// this is the start of the search bar section
<form className="max-w-md mx-auto">
    <label htmlFor="default-search"
           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search"
               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search Mockups, Logos..." required/>
        <button type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
        </button>
    </div>
</form>

//this is the end of the search bar section