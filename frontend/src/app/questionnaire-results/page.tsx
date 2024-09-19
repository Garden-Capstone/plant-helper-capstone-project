
import {PlantCard} from '@/app/search-results/components/PlantCard'
import {fetchPlantByPlantId, fetchPlantsByPlantName} from "@/utils/models/plant/plant.model";
import {Plant} from "@/utils/models/plant/plant.validator";
import {PageProps} from "@/utils/interfaces/NextComponent";
import React from "react";
import {SearchDetailsNav} from "@/app/components/navigation/SearchDetailsNav";


type SearchParams = {q: string | undefined}
export default async function Home(props: PageProps<{}, SearchParams>) {

    const plantIds = props.searchParams.q?.split(',') ?? []


    const plantPromises: Array<Promise<Plant>> =[]
    for(let plantId of plantIds){
     plantPromises.push(fetchPlantByPlantId(plantId))
    }

    const plants = await Promise.all(plantPromises)
    return (

        <>
                <SearchDetailsNav/>
                <section className='text-center md:text-start md:container mx-auto py-10'>
                    <div className='text-3xl'>
                        <h2> Results shown from questionnaire.
                        </h2>
                    </div>
                </section>
    
                <div className='container mx-auto'>
                     <div className='grid h-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                         {plants.map(plant => <PlantCard key={plant.plantId} plant={plant}/> )}
                     </div>
                </div>
        </>
    )
}

