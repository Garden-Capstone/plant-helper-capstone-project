'use client'
import React from "react"
import Navbar from "@/app/home-page/navbar"
import {SearchBar} from "@/app/home-page/searchbar";
import TopSection from "@/app/home-page/TopSection";




export default function Home () {
    return (
        <>
            <div className={'bg-[#2E8B57] justify-evenly gap-12 my-5'}>
            <Navbar/>
            </div>
            <TopSection/>
            <div className={'flex flex-col justify-center gap-12 my-5 items-center mx-auto'} >
            </div>
            <SearchBar/>

        </>
    )
}







