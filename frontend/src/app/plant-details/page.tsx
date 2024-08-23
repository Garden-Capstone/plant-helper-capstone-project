"use client";

import {Button, Badge, Sidebar, FloatingLabel, Navbar} from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function Component() {

    const insights = [
        { title: 'Sunlight Needs', description: 'Most plants need at least 6 hours of sunlight per day.' },
        { title: 'Watering Frequency', description: 'Water your plants when the topsoil feels dry.' },
        { title: 'Soil Type', description: 'Use well-draining soil to prevent root rot.' },
    ];


    return (
        <>
        {/*Navbar*/}
        <Navbar fluid rounded className="bg-[#2c6e49]">
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
                src="https://placehold.co/600x600"
                alt="Placeholder Image"
            />
        </div>

        {/*Plant Name and Description*/}
        <div className="text-2xl md:text-7xl mt-32 ml-14">
            <span>Plant Name </span>
            <div className="text-xl md:text-4xl md:ml-14">
                <span>Plant Scientific Name</span>
            </div>
        </div>
        <div className="mx-14 mt-11 md:text-lg text-sm">
            <span>This is a placeholder paragraph for the plant description. The rest is just a bob ross ipsum. Don't hurry. Take your time and enjoy. A thin paint will stick to a thick paint. Don't forget to tell these special people in your life just how special they are to you. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. A tree needs to be your friend if you're going to paint him. You have to make those little noises or it won't work.</span>
            <span> </span>
        </div>

        {/* Empty Space Placeholder */}
        <div className="mt-16 mx-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plant Benefits</h2>
            <ul className="list-disc ml-5 space-y-3">
                <li><strong>Air Purification:</strong> Here we can add some info on how the plant is beneficial.</li>
                <li><strong>Stress Relief:</strong> Here we can add some info on how the plant is beneficial.</li>
                <li><strong>Decorative:</strong> Here we can add some info on how the plant is beneficial.</li>
            </ul>
        </div>


            {/* Sidebar */}
            <Sidebar className="ml-14 mt-20 w-96">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie} className="text-xl p-6">
                            Specifications
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards} className="text-xl p-6">
                            Growing
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox} className="text-xl p-6">
                            Images
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser} className="text-xl p-6">
                            Distribution
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>


            {/* Quick Plant Insights Section */}
            <div className="mt-16 mx-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Plant Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {insights.map((insight, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                            <p className="text-gray-700">{insight.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}