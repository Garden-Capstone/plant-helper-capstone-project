"use client"

import {PlantCard} from '@/search-results/app/components/plantcard'
import {SearchNavBar} from "@/search-results/app/components/navigation";





export default function Home() {

    let plantcards = [
        {
            name: 'Monstera',
            image: 'https://images.unsplash.com/photo-1626929252164-27c26d107b00?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Monstera plant is a green plant that is green with interesting looking leaves. This is all filler text and to test props.'
        },
        {
            name: 'Tulip',
            image: 'https://images.unsplash.com/photo-1522431745718-cd31223a468d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Congue etiam odio dictum natoque nisi ante metus. Imperdiet iaculis justo vel tristique justo curabitur dolor sociosqu platea. Natoque condimentum dolor accumsan posuere a.'
        },
        {
            name: 'Venus Fly Trap',
            image: 'https://images.unsplash.com/photo-1538358519265-586278a34106?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Congue etiam odio dictum natoque nisi ante metus. Imperdiet iaculis justo vel tristique justo curabitur dolor sociosqu platea. Natoque condimentum dolor accumsan posuere a.'
        },
        {
            name: 'Aloe Vera',
            image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Congue etiam odio dictum natoque nisi ante metus. Imperdiet iaculis justo vel tristique justo curabitur dolor sociosqu platea. Natoque condimentum dolor accumsan posuere a.'
        },
        {
            name: 'Barrel Cactus',
            image: 'https://images.unsplash.com/photo-1528476513691-07e6f563d97f?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Congue etiam odio dictum natoque nisi ante metus. Imperdiet iaculis justo vel tristique justo curabitur dolor sociosqu platea. Natoque condimentum dolor accumsan posuere a.',
        }
    ]


    return (

        <>
            <SearchNavBar/>
            <section className='text-center md:text-start md:container mx-auto py-10'>
                <div className='text-xl'>
                    <h2> Results shown for
                        <span className='text-bold text-gray-700 italic'> 'cool plant' </span>
                    </h2>
                </div>
            </section>

            <div className='container mx-auto'>
                 <div className='grid h-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                     <PlantCard plantcard={plantcards[0]}/>
                     <PlantCard plantcard={plantcards[1]}/>
                     <PlantCard plantcard={plantcards[2]}/>
                     <PlantCard plantcard={plantcards[3]}/>
                     <PlantCard plantcard={plantcards[4]}/>
                 </div>
            </div>

        </>
    )
}

