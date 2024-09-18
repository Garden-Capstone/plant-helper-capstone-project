import {PageProps} from "@/utils/interfaces/NextComponent";
import React from "react";
import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";
import {AddPlantButton} from "@/app/plant-details/[plantId]/AddPlantButton/AddPlantButton";
import {getSession, Session} from "@/utils/session.utils";
import ClientNav from "@/app/navcomponents/ClientNav";
import {ToastError} from "@/app/plant-details/[plantId]/AddPlantButton/ToastError";



export default async function Details(props: PageProps<{plantId:string}>) {
    const plantId = props.params.plantId
    const plant = await fetchPlantByPlantId(plantId);
    // @ts-ignore
    const session : Session = await getSession();

    return (
        <>
            <div className="bg-[#F9F7EF] max-h-full font-sans">
                <ClientNav/>
                {/*Image Placeholder*/}
                <div className="mx-14 mt-16 float-left bg-[#DAA520]">
                    <img
                        src={plant.plantImageUrl}
                        alt={plant.plantName}
                        style={{width: '500px', height: '500px', objectFit: 'cover'}}
                    />
                </div>
                {/*Plant Name and Description*/}
                <div className="bg-[#F9F7EF]">
                    <div className="text-4xl md:text-7xl mt-14 ml-14 text-[#2C6E49] bg-[#F9F7EF] capitalize">
                        <span>{plant.plantName}</span>
                        <div className="text-xl md:text-4xl md:ml-14 text-[#E5C062]">
                            <span>{plant.plantSpecies}</span>
                        </div>
                    </div>
                    {/*Add plant to locker Button*/}
                    <div className='pt-4 pr-10 ml-14'>
                        <AddPlantButton session={session} plantId={plantId}/>
                        {/*<ToastError session={undefined}/>*/}
                    </div>
                    <div
                        className="mx-14 mt-6 md:text-md xl:text-xl text-md bg-[#F9F7EF] text-[#2C6E49] mb-16 md:mb-44">
                        <span>{plant.plantDescription}</span>
                    </div>
                </div>

                {/*plant facts*/}
                <div className="flex flex-wrap justify-center gap-8">
                    <div
                        className="w-48 p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Watering</h5>
                        </div>
                        <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantWatering}</p>
                    </div>

                    <div
                        className="w-48 max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Sunlight</h5>
                        </div>
                        <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantSunlight}
                        </p>
                    </div>

                    <div
                        className="w-48 max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Growth
                                Rate</h5>
                        </div>
                        <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantGrowthRate}
                        </p>
                    </div>
                    <div
                        className="w-48 max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Toxicity</h5>
                        </div>
                        <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">Is your plant toxic?</p>
                        <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantToxicity}
                        </p>
                    </div>
                    <div
                        className="w-48 max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Maintenance</h5>
                        </div>
                        <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantMaintenance}
                        </p>
                    </div>
                    <div
                        className="w-48 max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg group hover:bg-[#2C6E49]">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2C6E49] group-hover:text-white">Propagation</h5>
                        </div>
                        <p className="mb-3 font-normal text-[#2C6E49] group-hover:text-white">{plant.plantPropagation}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-16 bg-[#F9F7EF]">
            {/*  extra space*/}
            </div>
        </>
    );
}



