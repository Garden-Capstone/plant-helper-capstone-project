

import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";
import {PageProps} from "@/utils/interfaces/NextComponent";
import React from "react";
import {Progress} from "@/app/user-plant/[plantId]/Progress";
import {DisplayNav} from "@/app/navcomponents/DisplayNav";

export default async function UserPlant(props: PageProps<{plantId:string}>) {

    const plantId = props.params.plantId
    const plant = await fetchPlantByPlantId(plantId)

    return (
        <>
            <div className="bg-[#F9F7EF] min-h-screen">
            <DisplayNav/>
            <section className='p-12 float-left'>
                <img
                    src={plant.plantImageUrl}
                    alt={plant.plantName}
                    style={{width: '350px', height: '350px', objectFit: 'cover'}}
                />
            </section>

            <div className="bg-[#F9F7EF]">
                <div className="capitalize text-2xl md:text-7xl mt-12 ml-14 text-[#2C6E49] bg-[#F9F7EF]">
                    <h2>{plant.plantName}</h2>
                    <div className="capitalize text-xl md:text-4xl md:ml-14 text-[#E5C062]">
                        <span>{plant.plantSpecies}</span>
                    </div>
                </div>
                <div className="mx-14 mt-9 md:text-lg text-sm bg-[#F9F7EF] text-[#2C6E49]">
                    <span>{plant.plantDescription}</span>
                </div>
            </div>
            {/*care instruction*/}
            <div className="font-lg grid grid-cols-1 md:grid-cols-4 mt-24">
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Watering</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        {plant.plantWatering}
                    </p>
                </div>
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Sunlight</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        {plant.plantSunlight}
                    </p>
                </div>
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Growth Rate</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        {plant.plantGrowthRate}
                    </p>
                </div>
                <div className="mt-4 mx-10">
                    <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Toxicity</h3>
                    <p className="text-sm mb-3 text-[#2E8B57]">
                        {plant.plantToxicity}
                    </p>
                </div>
            </div>
    <Progress/>
            </div>
        </>
    )
}

