'use client'
import React from "react"
import Navbar from "@/app/home-page/navbar"
import {SearchBar} from "@/app/home-page/searchbar";
import TopSection from "@/app/home-page/TopSection";
import MainNav from "@/app/navcomponents/MainNav";
import {HomeSearch} from "@/app/home-page/HomeSearchForm/HomeSearch";




export default function Home () {
    return (
        <>
            <div className={'bg-[#2E8B57] justify-evenly gap-12'}>
            <MainNav/>
            </div>
            <TopSection/>
            <div className={'flex flex-col justify-center gap-12 my-5 items-center mx-auto'} >
            </div>
            <HomeSearch/>

        </>
    )
}







