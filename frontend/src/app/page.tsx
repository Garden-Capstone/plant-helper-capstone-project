import React from "react"
import TopSection from "@/app/home-page/TopSection";
import MainNav from "@/app/navcomponents/MainNav";
import {HomeSearch} from "@/app/home-page/HomeSearchForm/HomeSearch";
import {getSession} from "@/utils/session.utils";
import {LoggedInNav} from "@/app/navcomponents/LoggedInNav";


export default async function Home () {

    const session = await getSession();

    return (
        <>
            <div className={'bg-[#2E8B57] sticky justify-evenly gap-12'}>
                {session ? <LoggedInNav/> : <MainNav/>}
            </div>
            <TopSection/>
            <div className={'flex flex-col justify-center gap-12 my-5 items-center mx-auto'} >
            </div>
            <HomeSearch/>

        </>
    )
}







