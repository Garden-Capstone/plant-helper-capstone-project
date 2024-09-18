import { getSession } from "@/utils/session.utils";
import { LoggedInNav } from "@/app/navcomponents/LoggedInNav";
import MainNav from "@/app/navcomponents/MainNav";
import React from "react";

export default async function TestNav() {

    const session = await getSession();

    return (
        <>
            {session ? <LoggedInNav/> : <MainNav/>}

        </>
    );
}







