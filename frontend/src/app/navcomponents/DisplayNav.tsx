
import {getSession, Session} from "@/utils/session.utils";
import { LoggedInNav } from "@/app/navcomponents/LoggedInNav";
import MainNav from "@/app/navcomponents/MainNav";
import React from "react";

export async function DisplayNav() {
    const session = await getSession()


    return (
        <>
            {session ? <LoggedInNav session={session as Session} /> : <MainNav />}
        </>
    );
}