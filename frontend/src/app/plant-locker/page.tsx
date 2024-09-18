

import {UserPlantCard} from "@/app/plant-locker/components/userplant";
import {fetchLockersByProfileId} from "@/utils/models/locker/locker.model";
import {getSession, Session} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {Locker} from "@/utils/models/locker/locker.validator";
import {SearchDetailsNav} from "@/app/components/navigation/SearchDetailsNav";
import {Plant} from "@/utils/models/plant/plant.validator";
import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";
import {PageProps} from "@/utils/interfaces/NextComponent";

export default async function PlantLocker() {


// @ts-ignore
    const session: Session = await getSession();
        if (session === null) {
            redirect(`/login`)
        }

    const lockers : Locker[] = await fetchLockersByProfileId(session?.profile.profileId)

    return (
        <>
            <SearchDetailsNav/>
            <section className='text-3xl flex flex-row p-6 gap-4 bg-[#3CB371] max-w-[18rem] mx-auto md:mx-14 mt-4 mb-4 border-green-600 border-2 rounded-2xl text-white'>
                <h1 className='flex justify-center flex-wrap'>
                    Welcome Back <span className='flex'>{session.profile.profileUsername}</span>
                </h1>
            </section>
            <div className='justify-center gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {lockers.map(locker => <UserPlantCard key={locker.lockerProfileId} locker={locker}/>)}
            </div>
        </>
    )
}
