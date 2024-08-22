"use client"
import {Navbar} from "flowbite-react"

import Link from "next/link";

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