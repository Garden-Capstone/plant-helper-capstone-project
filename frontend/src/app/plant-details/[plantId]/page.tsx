
import { Footer } from "flowbite-react";

import {PageProps} from "@/utils/interfaces/NextComponent";
import React from "react";
import {DetailsNav} from "@/app/plant-details/[plantId]/DetailsNav";
import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";

export default async function Details(props: PageProps<{plantId:string}>) {
    const plantId = props.params.plantId

    console.log('plantId', plantId)
    const plant = await fetchPlantByPlantId(plantId);
    console.log(plant)
    return (
        <>

            <div className="bg-[#F9F7EF] max-h-full font-sans">
                {/*Navbar*/}
               {/*<DetailsNav/>*/}
                {/*Image Placeholder*/}
                <div className="mx-14 mt-12 float-left bg-[#DAA520]">
                    <img
                        src={plant.plantImageUrl}
                        alt={plant.plantName}
                        style={{width: '500px', height: '500px', objectFit: 'cover'}}
                    />
                </div>

                {/*Plant Name and Description*/}
                <div className="bg-[#F9F7EF]">
                    <div className="text-3xl md:text-7xl mt-36 ml-14 text-[#2C6E49] bg-[#F9F7EF]">
                        <span>{plant.plantName}</span>
                        <div className="text-xl md:text-4xl md:ml-14 text-[#E5C062]">
                            <span>{plant.plantSpecies}</span>
                        </div>
                    </div>
                    <div className="mx-14 mt-9 md:text-lg text-sm bg-[#F9F7EF] text-[#2C6E49] mb-16 md:mb-48">
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


                {/*    <Footer container className="bg-[#DAA520] p-5 mt-11">*/}
                {/*        <Footer.Copyright className="text-[#F9F7EF] hover:font-bold" href="#" by="PlantWhisperer™"*/}
                {/*                          year={2024}/>*/}
                {/*        <Footer.LinkGroup className="text-[#F9F7EF] hidden md:flex">*/}
                {/*            <Footer.Link className="hover:font-bold" href="#">Home</Footer.Link>*/}
                {/*            <Footer.Link className="hover:font-bold" href="/login">Login</Footer.Link>*/}
                {/*            <Footer.Link className="hover:font-bold" href="#">Sign Up</Footer.Link>*/}
                {/*        <Footer.Link className="hover:font-bold" href="#">Questionnaire</Footer.Link>*/}
                {/*    </Footer.LinkGroup>*/}
                {/*</Footer>*/}
            </div>

        </>
    );
}

