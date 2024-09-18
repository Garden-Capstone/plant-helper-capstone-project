

import {UserPlantCard} from "@/app/plant-locker/components/userplant";
import {fetchLockersByProfileId} from "@/utils/models/locker/locker.model";
import {getSession, Session} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {Locker} from "@/utils/models/locker/locker.validator";
import {SearchDetailsNav} from "@/app/components/navigation/SearchDetailsNav";
import {Plant} from "@/utils/models/plant/plant.validator";
import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";
import {PageProps} from "@/utils/interfaces/NextComponent";
import {DisplayNav} from "@/app/navcomponents/DisplayNav";


export default async function PlantLocker() {


// @ts-ignore
    const session: Session = await getSession();
        if (session === null) {
            redirect(`/login`)
        }

    const lockers : Locker[] = await fetchLockersByProfileId(session?.profile.profileId)

    return (
        <>
           <DisplayNav />
            <section className='flex font-serif text-5xl pb-6 pt-6 gap-4 max-w-full
            mx-auto md:mx-14 mt-4 mb-4 border-green-600 text-[#2C6E49]'>
                <h1 className=' justify-center '>
                    Welcome Back <span className='text-[#3CB371]'>{session.profile.profileUsername}!</span>
                </h1>
            </section>
            <div className='text-5xl bg-[#2C6E49] font-bold py-3 font-serif text-center' >
                <h5 className='text-white'>Plant Locker</h5>
            </div>
            <div className='container py-10 max-w-full mx-6 justify-center gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {lockers.map(locker => <UserPlantCard key={locker.lockerProfileId} locker={locker}/>)}
            </div>
        </>
    )
}
