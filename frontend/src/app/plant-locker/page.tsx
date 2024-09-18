

import PlantNavBar from "@/app/plant-locker/components/lockernavigation";
import {UserPlantCard} from "@/app/plant-locker/components/userplant";
import {fetchLockersByProfileId} from "@/utils/models/locker/locker.model";
import {getSession, Session} from "@/utils/session.utils";
import {redirect} from "next/navigation";
import {Locker} from "@/utils/models/locker/locker.validator";

export default async function PlantLocker() {

<<<<<<< HEAD
    const plantdata = [
        {
            image: 'https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJ1YmJlciUyMHBsYW50fGVufDB8fDB8fHww',
            alt: 'picture of a Rubber Plant',
            name: 'Rubber Plant'
        },
        {
            image: 'https://images.unsplash.com/photo-1640610724404-4214cb70778b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdGhvcyUyMHBsYW50fGVufDB8fDB8fHww',
            alt: 'picture of a Pothos plant',
            name: 'Pothos'
        },
        {
            image: 'https://images.unsplash.com/photo-1616961065849-edf307a08bcb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Picture of a snake plant',
            name: 'Snake Plant'
        },
        {
            image: 'https://images.unsplash.com/photo-1692896315703-f700fd67c921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGhpbG9kZW5kcm9ufGVufDB8fDB8fHww',
            alt: 'Picture of a philodendron plant',
            name: 'Philodendron'
        }
    ]
=======
// @ts-ignore
    const session: Session = await getSession();
        if (session === null) {
            redirect(`/login`)
        }

    const lockers : Locker[] = await fetchLockersByProfileId(session?.profile.profileId)
>>>>>>> 9eee978ee0082e5a7be3be62d058bf21a165b830

    return (
        <>
            <PlantNavBar/>
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

