"use client"

import PlantNavBar from "@/components/navigation";
import {Plantimage} from "@/components/plantimage";
import PlantDescription from "@/components/plantdescription";

export default function Home() {

    const plantimages = [
        {
            image : 'https://placehold.co/500x500',
            alt : 'Spider plant placeholder image'
        }
    ]

    return (
        <>
            <PlantNavBar/>

                <div className='justify-center gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <Plantimage plantimage={plantimages[0]}/>
                </div>
                <PlantDescription/>

        </>
    )
}

