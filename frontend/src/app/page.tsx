"use client"

import PlantNavBar from "@/components/navigation";
import {Plantimage} from "@/components/plantimage";
import PlantDescription from "@/components/plantdescription";

export default function Home() {

    const plantimages = [
        {
            image : 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt : 'Rubber Plant placeholder image'
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

