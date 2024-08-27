"use client";

import {Tabs, FloatingLabel, Navbar, Footer } from "flowbite-react";
import { FaImage, FaBookReader } from "react-icons/fa";
import { GiPlantRoots, GiPlantSeed } from "react-icons/gi";
import { HiBookOpen } from "react-icons/hi";
import {PiPottedPlantBold} from "react-icons/pi";
import { useState } from "react";


export default function Details() {

    const [activeTab, setActiveTab] = useState('Specifications');

    return (
        <>
        <div className="bg-[#F9F7EF] max-h-full font-sans">
        {/*Navbar*/}
        <Navbar fluid rounded className="bg-[#2C6E49]">
            <Navbar.Brand className="text-2xl sm:text-3xl md:text-4xl" href="/">
                <PiPottedPlantBold className="text-[#F9F7EF]"/>
                <span className="self-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F9F7EF] font-serif">
                    Plant Whisperer
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 items-center space-x-4">
                <div className="hidden md:block text-[#F9F7EF]">
                    <FloatingLabel
                        variant="outlined"
                        label="Search"
                        style={{ width: '300px' }}
                        className="bg-[#2C6E49] text-[#F9F7EF] hover:text-[#F9F7EF] focus:text-[#F9F7EF] focus:ring-4 focus:ring-[#F9F7EF]"/>
                </div>
                <svg
                    className="w-6 h-6 text-[#2C6E49] md:hidden"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse >
                <Navbar.Link className="text-[#F9F7EF]" href="#">Home</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF]" href="#">Login</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF]" href="#">Sign Up</Navbar.Link>
                <Navbar.Link className="text-[#F9F7EF]" href="#">Questionnaire</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>


        {/*Image Placeholder*/}
        <div className="mx-14 mt-12 float-left bg-[#DAA520]">
            <img
                src="https://placehold.co/500x500"
                alt="Placeholder Image"
            />
        </div>

        {/*Plant Name and Description*/}
    <div className="bg-[#F9F7EF]">
        <div className="text-2xl md:text-7xl mt-36 ml-14 text-[#2C6E49] bg-[#F9F7EF]">
            <span>Plant Name </span>
            <div className="text-xl md:text-4xl md:ml-14 text-[#E5C062]">
                <span>Plant Scientific Name</span>
            </div>
        </div>
        <div className="mx-14 mt-9 md:text-lg text-sm bg-[#F9F7EF] text-[#2C6E49]">
            <span>This is a placeholder paragraph for the plant description. The rest is just a bob ross ipsum. Don't hurry. Take your time and enjoy. A thin paint will stick to a thick paint. Don't forget to tell these special people in your life just how special they are to you. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. A tree needs to be your friend if you're going to paint him. You have to make those little noises or it won't work.</span>
        </div>
    </div>

        {/*Tabs For Desktop View*/}
        <div className="md:flex hidden mt-56 ml-14 mr-14 pb-20 bg-[#F9F7EF]">
            <ul className="flex-column space-y space-y-4 text-lg font-medium md:me-4 mb-4 md:mb-0">
                <li>
                    <button
                        onClick={() => setActiveTab('Specifications')}
                        className="inline-flex items-center px-4 py-3 text-[#2C6E49] focus:text-white bg-[#F9F7EF] hover:bg-[#F7B8B7] active:bg-[#F7B8B7] focus:bg-[#F09999] rounded-lg w-80">
                        <HiBookOpen/>
                        Specifications
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActiveTab('Growing')}
                        className="inline-flex items-center px-4 py-3 text-[#2C6E49] focus:text-white bg-[#F9F7EF] hover:bg-[#F7B8B7] active:bg-[#F7B8B7] focus:bg-[#F09999] rounded-lg w-80">
                        <GiPlantRoots/>
                        Growing
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActiveTab('Propagation')}
                        className="inline-flex items-center px-4 py-3 text-[#2C6E49] focus:text-white bg-[#F9F7EF] hover:bg-[#F7B8B7] active:bg-[#F7B8B7] focus:bg-[#F09999] rounded-lg w-80">
                        <GiPlantSeed/>
                        Propagation Settings
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActiveTab('Considerations')}
                        className="inline-flex items-center px-4 py-3 text-[#2C6E49] focus:text-white bg-[#F9F7EF] hover:bg-[#F7B8B7] active:bg-[#F7B8B7] focus:bg-[#F09999] rounded-lg w-80">
                        <FaBookReader/>
                        Considerations
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActiveTab('Images')}
                        className="inline-flex items-center px-4 py-3 text-[#2C6E49] focus:text-white bg-[#F9F7EF] hover:bg-[#F7B8B7] active:bg-[#F7B8B7] focus:bg-[#F09999] rounded-lg w-80">
                        <FaImage/>
                        Images
                    </button>
                </li>
            </ul>

            {/*Description Tab*/}
            {/*Specifications*/}
            <div className="p-6 rounded-lg w-full">
                <div className="font-medium text-left">
                    {activeTab === 'Specifications' && (
                        <>
                            <div className="mx-10">
                                <h3 className="text-2xl font-semibold text-[#2C6E49] mb-2">Height</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    The average height of the plant ranges from 10 inches to 3 feet depending on the
                                    species.The average height of the plant ranges from 10 inches to 3 feet depending on the
                                    species.The average height of the plant ranges from 10 inches to 3 feet depending on the
                                    species. The average height of the plant ranges from 10 inches to 3 feet depending on the
                                    species.
                                </p>
                            </div>
                            <div className="mt-5 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Width</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    The plant can spread out to a width of 1 to 2 feet, requiring adequate space to
                                    grow. The plant can spread out to a width of 1 to 2 feet, requiring adequate space to
                                    grow. The plant can spread out to a width of 1 to 2 feet, requiring adequate space to
                                    grow. The plant can spread out to a width of 1 to 2 feet, requiring adequate space to
                                    grow. The plant can spread out to a width of 1 to 2 feet, requiring adequate space to
                                    grow.
                                </p>
                            </div>
                            <div className="mt-5 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Toxicity</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    This plant is toxic to pets and should be kept out of reach of cats and dogs. This plant is toxic to pets and should be kept out of reach of cats and dogs. This plant is toxic to pets and should be kept out of reach of cats and dogs. This plant is toxic to pets and should be kept out of reach of cats and dogs. This plant is toxic to pets and should be kept out of reach of cats and dogs. This plant is toxic to pets and should be kept out of reach of cats and dogs.
                                </p>
                            </div>
                            <div className="mt-5 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Color</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    The plant has vibrant green leaves with occasional white or yellow variegation. The plant has vibrant green leaves with occasional white or yellow variegation.
                                </p>
                            </div>
                        </>
                    )}
                    {activeTab === 'Growing' && (
                        <div className="font-medium text-left">
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Watering</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    Placeholders for watering instructions.
                                </p>
                            </div>
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Soil</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    Placeholders for soil instructions.
                                </p>
                            </div>
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Light</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    Placeholder for lighting instructions.
                                </p>
                            </div>
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Temperature</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    Placeholder for temperature instructions.
                                </p>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Propagation' && (
                        <div className="font-medium text-left">
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Division</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    Division is the most common method of propagation for this plant. Placeholder;
                                </p>
                            </div>
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Seeds</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    Seeds are another method of propagation for this plant. Placeholder;
                                </p>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Considerations' && (
                        <div className="font-medium text-left">
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Common Uses</h3>
                                <p className="text-sm mb-3 text-[#2E8B57]">
                                    Placeholder for common uses of the plant.
                                </p>
                            </div>
                            <div className="mt-4 mx-10">
                                <h3 className="text-2xl font-semibold mb-2 text-[#2C6E49]">Cultural Significance</h3>
                                <p className="ttext-sm mb-3 text-[#2E8B57]">
                                    Placeholder for cultural significance of the plant.
                                </p>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Images' && (
                        <div className="font-medium flex justify-center">
                            <div className="mt-4 mx-16">
                                <img
                                    src="https://placehold.co/300x300"
                                    alt="Placeholder Image"/>
                            </div>
                            <div className="mt-4 mx-16">
                                <img
                                    src="https://placehold.co/300x300"
                                    alt="Placeholder Image"/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/*End of Tabs for Desktop View*/}


        {/*Tabs For Mobile View*/}
            <Tabs aria-label="Tabs with icons" className="md:hidden mt-8 mb-1 mx-auto">
                <Tabs.Item
                    title="S"
                    active
                    icon={HiBookOpen}>
                    <div className="font-medium text-left">
                        <h2 className="text-2xl font-semibold mx-9">Specifications</h2>
                        <div className="mt-4 mx-14">
                            <h3 className="text-lg font-semibold">Height</h3>
                            <p className="text-sm ">
                                The average height of the plant ranges from 10 inches to 3 feet depending on the
                        species.
                    </p>
                </div>
                <div className="mt-4 mx-14">
                    <h3 className="text-lg font-semibold">Width</h3>
                    <p className="text-sm text-gray-600">
                        The plant can spread out to a width of 1 to 2 feet, requiring adequate space to grow.
                    </p>
                </div>
                <div className="mt-4 mx-14">
                    <h3 className="text-lg font-semibold">Toxicity</h3>
                    <p className="text-sm text-gray-600">
                        This plant is toxic to pets and should be kept out of reach of cats and dogs.
                    </p>
                </div>
                <div className="mt-4 mx-14">
                    <h3 className="text-lg font-semibold">Color</h3>
                    <p className="text-sm text-gray-600">
                        The plant has vibrant green leaves with occasional white or yellow variegation.
                    </p>
                </div>
            </div>
        </Tabs.Item>
        {/*Growing Tab*/}
        <Tabs.Item
            title="S"
            active
            icon={GiPlantRoots}>
            <div className="font-medium text-gray-800 text-left">
                <h2 className="text-2xl font-semibold mx-9">Growing</h2>
                <div className="mt-4 mx-14">
                    <h3 className="text-lg font-semibold">Watering</h3>
                    <p className="text-sm text-gray-600">
                        Placeholders for watering instructions.
                    </p>
                </div>
                <div className="mt-4 mx-14">
                    <h3 className="text-lg font-semibold">Soil</h3>
                    <p className="text-sm text-gray-600">
                        Placeholders for soil instructions.
                    </p>
                </div>
                <div className="mt-4 mx-14">
                    <h3 className="text-lg font-semibold">Light</h3>
                    <p className="text-sm text-gray-600">
                        Placeholder for lighting instructions.
                    </p>
                </div>
                <div className="mt-4 mx-14">
                    <h3 className="text-lg font-semibold">Temperature</h3>
                    <p className="text-sm text-gray-600">
                        Placeholder for temperature instructions.
                    </p>
                </div>
            </div>
        </Tabs.Item>
        {/*Propagation Methods Tab*/}
                <Tabs.Item
                    title="S"
                    active
                    icon={GiPlantSeed}>
                    <div className="font-medium text-gray-800 text-left">
                        <h2 className="text-2xl font-semibold mx-9">Propagation Methods</h2>
                        <div className="mt-4 mx-14">
                            <h3 className="text-lg font-semibold">Division</h3>
                            <p className="text-sm text-gray-600">
                                Division is the most common method of propagation for this plant. Placeholder;
                            </p>
                        </div>
                        <div className="mt-4 mx-14">
                            <h3 className="text-lg font-semibold">Seeds</h3>
                            <p className="text-sm text-gray-600">
                                Seeds are another method of propagation for this plant. Placeholder;
                            </p>
                        </div>
                    </div>
                </Tabs.Item>
        {/*Considerations Tab*/}
                <Tabs.Item
                    title="S"
                    active
                    icon={FaBookReader}>
                    <div className="font-medium text-gray-800 text-left">
                        <h2 className="text-2xl font-semibold mx-9">Considerations</h2>
                        <div className="mt-4 mx-14">
                            <h3 className="text-lg font-semibold">Common Uses</h3>
                            <p className="text-sm text-gray-600">
                                Placeholder for common uses of the plant.
                            </p>
                        </div>
                        <div className="mt-4 mx-14">
                            <h3 className="text-lg font-semibold">Cultural Significance</h3>
                            <p className="text-sm text-gray-600">
                                Placeholder for cultural significance of the plant.
                            </p>
                        </div>
                    </div>
                </Tabs.Item>
        {/*Images Tab*/}
                <Tabs.Item
                    title="S"
                    active
                    icon={FaImage}>
                    <div className="font-medium text-gray-800 text-left">
                        <h2 className="text-2xl font-semibold mb-3 mx-9">Images</h2>
                        <div className="mt-4 mx-16">
                            <img
                                src="https://placehold.co/300x300"
                                alt="Placeholder Image"
                            />
                        </div>
                        <div className="mt-4 mx-16">
                            <img
                                src="https://placehold.co/300x300"
                                alt="Placeholder Image"
                            />
                        </div>
                    </div>
                </Tabs.Item>
            </Tabs>
            {/*End of Tabs for Mobile View*/}
        </div>

            <Footer container className="bg-[#DAA520] p-6">
                <Footer.Copyright className="text-[#F9F7EF]" href="#" by="PlantWhisperer™" year={2024} />
                <Footer.LinkGroup className="text-[#F9F7EF]">
                    <Footer.Link href="#">Home</Footer.Link>
                    <Footer.Link href="/login">Login</Footer.Link>
                    <Footer.Link href="#">Sign Up</Footer.Link>
                    <Footer.Link href="#">Questionnaire</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    );
}