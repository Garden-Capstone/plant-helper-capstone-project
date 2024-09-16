import {getSession} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {fetchProfileByProfileId} from "@/utils/models/profile/profile.model";
import React from "react";
import {ProfileNav} from "@/app/settings/ProfileNav";
import EditProfileForm from "@/app/settings/EditProfileForm";


export default async function Settings() {

    const session = await getSession();
    const profile = await fetchProfileByProfileId(session?.profile.profileId ?? "");
    if (!session || !profile) {
        return(redirect('/sign-in'))
    }
    console.log(profile)

    return (
        <>
           <ProfileNav/>
            <EditProfileForm profile={profile} authorization={session?.authorization}/>
        </>
    );
}