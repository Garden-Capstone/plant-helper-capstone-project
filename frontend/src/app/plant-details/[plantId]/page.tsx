
import {PageProps} from "@/utils/interfaces/NextComponent";
import React from "react";
import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";
import {SearchDetailsNav} from "@/app/components/navigation/SearchDetailsNav";
import {Footer} from "@/app/footercomponent/Footer";
import {AddPlantButton} from "@/app/plant-details/[plantId]/AddPlantButton/AddPlantButton";

export default async function Details(props: PageProps<{plantId:string}>) {
    const plantId = props.params.plantId

    console.log('plantId', plantId)
    const plant = await fetchPlantByPlantId(plantId);
    console.log(plant)
    return (
        <>

            <div className="bg-[#F9F7EF] max-h-full font-sans">
                {/*Navbar*/}
                <SearchDetailsNav/>
                {/*Image Placeholder*/}
                <div className="mx-14 mt-12 float-left bg-[#DAA520]">
                    <img
                        src={plant.plantImageUrl}
                        alt={plant.plantName}
                        style={{width: '500px', height: '500px', objectFit: 'cover'}}
                    />
                </div>
                {/*Add plant to locker Button*/}
                <div className='flex flex-wrap justify-end pt-10 pr-10'>
                    <AddPlantButton/>
                </div>
                {/*Plant Name and Description*/}
                <div className="bg-[#F9F7EF]">
                    <div className="text-3xl md:text-7xl mt-36 ml-14 text-[#2C6E49] bg-[#F9F7EF] capitalize">
                        <span>{plant.plantName}</span>
                        <div className="text-xl md:text-4xl md:ml-14 text-[#E5C062]">
                            <span>{plant.plantSpecies}</span>
                        </div>
                    </div>
                    <div className="mx-14 mt-9 md:text-lg xl:text-xl text-sm bg-[#F9F7EF] text-[#2C6E49] mb-16 md:mb-48">
                        <span>{plant.plantDescription}</span>
                    </div>
                </div>

                {/*plant facts*/}
                <div className="flex flex-wrap justify-around">
                        <div
                            className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Watering</h5>
                            </div>
                            <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">
                                {plant.plantWatering}
                            </p>
                        </div>

                        <div
                            className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Sunlight</h5>
                            </div>
                            <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantSunlight}
                            </p>
                        </div>

                        <div
                            className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Growth Rate</h5>
                            </div>
                            <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantGrowthRate}
                            </p>
                        </div>
                        <div
                            className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Toxicity</h5>
                            </div>
                            <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantToxicity}
                            </p>
                        </div>
                        <div
                            className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Maintenance</h5>
                            </div>
                            <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantMaintenance}
                            </p>
                        </div>
                        <div
                            className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Propagation</h5>
                            </div>
                            <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantPropagation}
                            </p>
                        </div>
                    </div>
                <Footer/>
            </div>

        </>
    );
}

