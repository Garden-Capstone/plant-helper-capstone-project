'use client'
import React from "react"
import Navbar from "@/app/components/navbar"
import {NewHereGrow} from "@/app/components/newheregrow";
import NewHere from "@/app/components/newhere";
import LoginButton from "@/app/components/loginbutton";
import {SearchBar} from "@/app/components/searchbar";
import TopSection from "@/app/components/topsection";



export default function Home () {
    return (
        <>
            <div className={'bg-[#2E8B57] justify-evenly gap-12 my-5'}>
            <Navbar/>
            </div>
            {/*<TopSection/>*/}
            <div className={'flex flex-col justify-center gap-12 my-5 items-center mx-auto'} >
                <LoginButton/>
            <NewHereGrow/>
            <NewHere/>

            </div>
            <SearchBar/>

        </>
    )
}







