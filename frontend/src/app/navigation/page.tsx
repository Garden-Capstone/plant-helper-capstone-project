'use client'

import {Navbar} from "flowbite-react";
import Link from "next/link";

export function HomeNavbar () {

return(
    <>
    <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold">Plant Whisperer</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Navbar.Link as={Link} href="/">
                Home
            </Navbar.Link>
            <Navbar.Link as={Link} href="#">
                Search
            </Navbar.Link>
            <Navbar.Link href="#">Login</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    </>
)

}