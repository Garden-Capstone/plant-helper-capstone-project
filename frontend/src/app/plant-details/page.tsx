"use client";

import {Sidebar, FloatingLabel, Navbar, Tabs} from "flowbite-react";
import { FaImage, FaBookReader } from "react-icons/fa";
import { GiPlantRoots, GiPlantSeed } from "react-icons/gi";
import { HiBookOpen } from "react-icons/hi";




export default function Details() {
    return (
        <>
            {/*Navbar*/}
            <Navbar fluid rounded>
                <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold">
                    Plant Whisperer
                </span>
                </Navbar.Brand>
                <div className="flex md:order-2 items-center space-x-4">
                    <div className="hidden md:block">
                        <FloatingLabel variant="outlined" label="Search"/>
                    </div>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white md:hidden"
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
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>Home</Navbar.Link>
                    <Navbar.Link href="#">Login</Navbar.Link>
                    <Navbar.Link href="#">Sign Up</Navbar.Link>
                    <Navbar.Link href="#">Questionnaire</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>


            {/*Image Placeholder*/}
            <div className="mx-14 mt-12 float-left">
                <img
                    src="https://placehold.co/500x500"
                    alt="Placeholder Image"
                />
            </div>

            {/*Plant Name and Description*/}
            <div className="text-2xl md:text-7xl mt-36 ml-14">
                <span>Plant Name </span>
                <div className="text-xl md:text-4xl md:ml-14">
                    <span>Plant Scientific Name</span>
                </div>
            </div>
            <div className="mx-14 mt-9 md:text-lg text-sm">
                <span>This is a placeholder paragraph for the plant description. The rest is just a bob ross ipsum. Don't hurry. Take your time and enjoy. A thin paint will stick to a thick paint. Don't forget to tell these special people in your life just how special they are to you. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. A tree needs to be your friend if you're going to paint him. You have to make those little noises or it won't work.</span>
            </div>

            {/*place holder*/}
            <div></div>
            <p> A thin paint will stick to a thick paint. Don't forget to tell these special people in your life just
                how special they are to you. This is an example of what you can do with just a few things, a little
                imagination and a happy dream in your heart. A tree needs to be your friend if you're going to paint
                him. You have to make those little noises or it won't work. his is an example of what you can do with
                just a few things, a little imagination and a happy dream in your heart. A tree needs to be your friend
                if you're going to paint him. You have to make those little noises or it won't work.</p>


            {/*Tabs For Desktop View*/}
            <Tabs aria-label="Tabs with icons" variant="underline"
                  className="flex flex-col content-start items-start mt-8 ml-7">
                <Tabs.Item active title="Profile" icon={HiBookOpen} className="grid">
                    <p className="font-medium text-gray-800">This is profile tab's associated
                        content Clicking another tab will toggle the visibility of this one for the next. The tab
                        JavaScript swaps classes to control the content visibility and styling.</p>
                </Tabs.Item>
                <Tabs.Item title="Dashboard" icon={GiPlantRoots}>
                    <p className="font-medium text-gray-800">This is dash tab's associated
                        content Clicking another tab will toggle the visibility of this one for the next. The tab
                        JavaScript swaps classes to control the content visibility and styling.</p>
                </Tabs.Item>
                <Tabs.Item title="Settings" icon={GiPlantSeed}>
                    <p className="font-medium text-gray-800">This is dash tab's associated
                        content Clicking another tab will toggle the visibility of this one for the next. The tab
                        JavaScript swaps classes to control the content visibility and styling.</p>
                </Tabs.Item>
                <Tabs.Item title="Contacts" icon={FaBookReader}>
                    <p className="font-medium text-gray-800">This is Profile tab's associated
                        content Clicking another tab will toggle the visibility of this one for the next. The tab
                        JavaScript swaps classes to control the content visibility and styling.</p>
                </Tabs.Item>
            </Tabs>


            {/*Tabs For Mobile View*/}
            <Tabs aria-label="Tabs with icons" className="md:hidden mt-8 mb-1 mx-auto">
                <Tabs.Item active icon={HiBookOpen}>
                    <div className="font-medium text-gray-800 text-left">
                        <h2 className="text-2xl font-semibold mx-9">Specifications</h2>
                        <div className="mt-4 mx-14">
                            <h3 className="text-lg font-semibold">Height</h3>
                            <p className="text-sm text-gray-600">
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
                <Tabs.Item icon={GiPlantRoots}>
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
                {/*Distribution Tab*/}
                <Tabs.Item icon={GiPlantSeed}>
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
                <Tabs.Item icon={FaBookReader}>
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
                <Tabs.Item icon={FaImage}>
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

        </>
    );
}