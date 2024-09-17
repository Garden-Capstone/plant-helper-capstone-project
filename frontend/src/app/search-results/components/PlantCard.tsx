
import {Plant} from "@/utils/models/plant/plant.validator";
import Link from "next/link";

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
    const {plantImageUrl, plantName, plantSpecies, plantDescription, plantId} = plant
    return (
        <>

                <div className="mx-10 md:container md:mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:border-blue-700 ">
                    <div>
                        <img className="rounded-t-lg h-72 w-full " src={plantImageUrl} alt={plantName} />
                    </div>
                    <div className="p-5">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] capitalize">{plantName} </h5>
                            <h6 className='mb-2 text-2xl italic tracking-tight text-[#E5C062]'>{plantSpecies}</h6>
                        </div>

                        {/*removed plant description for consistent cards*/}

                        {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{plantDescription}</p>*/}
                        <div className=''>
                            <Link href={`/plant-details/${plantId}`}
                               className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#2C6E49] bg-white shadow-lg rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-400">
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>


        </>
    )
}