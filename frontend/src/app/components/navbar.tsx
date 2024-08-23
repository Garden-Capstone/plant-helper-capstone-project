'use client'

import React from "react";
import {Navbar} from "flowbite-react";

export default function NavBar() {
    return (
        <Navbar  >
            <Navbar.Brand as={Navbar} href="https://flowbite-react.com">
                <span className="text-5xl text-[#3CB371] font-bold dark:text-white">Plant Whisperer</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                {/*<Navbar.Link as={Navbar} href="#">*/}
                {/*    About*/}
                {/*</Navbar.Link>*/}
                <Navbar.Link href="#">LogIn</Navbar.Link>
                <Navbar.Link href="#">Learn More</Navbar.Link>
                <Navbar.Link href="#">Search</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
