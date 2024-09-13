"use client"
import {Navbar} from "flowbite-react"
import Link from "next/link";

// import Link from "next/link";

export default function NavBar() {
    return (
//
//
        <Navbar fluid rounded className="bg-[#3CB371] dark:bg-[#3CB371]">
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