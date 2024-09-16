
import {PlantCard} from '@/app/search-results/components/PlantCard'
import {fetchPlantsByPlantName} from "@/utils/models/plant/plant.model";
import {Plant} from "@/utils/models/plant/plant.validator";
import {PageProps} from "@/utils/interfaces/NextComponent";
import React from "react";
import {SearchNavBar} from "@/app/search-results/components/navigation";
import {SearchDetailsNav} from "@/app/components/navigation/SearchDetailsNav";

type SearchParams = {q: string | undefined}
export default async function Home(props: PageProps<{}, SearchParams>) {

    const q = props.searchParams.q

    const plants: Plant[] = await fetchPlantsByPlantName(q ?? '')

    return (

        <>
            <SearchDetailsNav/>
            <section className='text-center md:text-start md:container mx-auto py-10'>
                <div className='text-xl'>
                    <h2> Results shown for
                        <span className='text-bold text-gray-700 italic'> '{q}'</span>
                    </h2>
                </div>
            </section>

            <div className='container mx-auto'>
                 <div className='grid h-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                     {plants.map(plant => <PlantCard key={plant.plantId} plant={plant}/> )}
                 </div>
            </div>

        </>
    )
}

