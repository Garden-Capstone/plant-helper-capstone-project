
import {Card} from "flowbite-react";
import {Plant} from "@/utils/models/plant/plant.validator";

// purpose of this card
// display plant image, name, and description
// button at the bottom of the card, "learn more"
// this needs to be dynamic with data from the API
// needs to be replicated with number of results


type PlantCardProps = {
    plant: Plant;
}

export function PlantCard (props: PlantCardProps) {

    const {plant} = props;
    const {plantImageUrl, plantName, plantSpecies, plantDescription} = plant
    return (
        <>


            <div className="mx-10 md:container md:mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:border-blue-700 ">
                <a href="#">
                    <img className="rounded-t-lg h-72 w-full " src={plantImageUrl} alt={plantName} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{plantName} {plantSpecies}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{plantDescription}</p>
                    <a href="#"
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Read more
                        {/*<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"*/}
                        {/*     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">*/}
                        {/*    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                        {/*          d="M1 5h12m0 0L9 1m4 4L9 9"/>*/}
                        {/*</svg>*/}
                    </a>
                </div>
            </div>


        </>
    )
}