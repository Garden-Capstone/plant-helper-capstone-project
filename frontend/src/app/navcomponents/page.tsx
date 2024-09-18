import { useEffect, useState } from "react";
import { getSession } from "@/utils/session.utils";
import { LoggedInNav } from "@/app/navcomponents/LoggedInNav";
import MainNav from "@/app/navcomponents/MainNav";
import React from "react";

export default function TestNav() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        async function fetchSession() {
            const sessionData = await getSession();
            setSession(sessionData);
        }
        fetchSession();
    }, []);

    return (
        <>
            {session ? <LoggedInNav /> : <MainNav />}
        </>
    );
}