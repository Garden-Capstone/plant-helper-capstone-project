
import {PlantCard} from '@/app/search-results/components/PlantCard'
import {fetchPlantsByPlantName} from "@/utils/models/plant/plant.model";
import {Plant} from "@/utils/models/plant/plant.validator";
import {PageProps} from "@/utils/interfaces/NextComponent";
import React from "react";
import ClientNav from "@/app/navcomponents/ClientNav";


type SearchParams = {q: string | undefined}
export default async function Home(props: PageProps<{}, SearchParams>) {

    const q = props.searchParams.q

    const plants: Plant[] = await fetchPlantsByPlantName(q ?? '')

    return (
        <>
            <div className="min-h-screen bg-[#F9F7EF]">
                <ClientNav/>
                <section className='text-center md:text-start md:container mx-auto py-10'>
                    <div className='text-3xl'>
                        <h2> Results shown for
                            <span className='text-bold text-gray-700 italic'> '{q}'</span>
                        </h2>
                    </div>
                </section>
                <div className='container mx-auto'>
                    <div className='grid h-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {plants.map(plant => <PlantCard key={plant.plantId} plant={plant}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

