"use client";
import { useState } from "react";
import { Button, Navbar, Modal } from "flowbite-react";
import { Label } from "flowbite-react";
import Link from "next/link";


export default function Settings() {


    {/*This section is the code for the picture*/}
    const [profilePic, setProfilePic] = useState("https://images.unsplash.com/photo-1611866759729-0cba525f9b45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100");
    const [showModal, setShowModal] = useState(false);

    {/*Image placeholder array*/}
    const pictures = [
        "https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1509937528035-ad76254b0356?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1504280335916-c3e24a215b8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",

        "https://images.unsplash.com/photo-1611866759729-0cba525f9b45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100",
    ];

    {/*This code is for the picture selection*/}
    const handlePictureSelect = ({url}: { url: any }) => {
        setProfilePic(url);
        setShowModal(false);
    };

    return (
        <>
            {/*Navbar*/}
            <Navbar fluid rounded className="justify-between bg-[#2c6e49]">
                <Navbar.Brand className="relative">
                    <Link href="/">
                        <svg
                            className="w-9 h-9 text-[#f9f7ef]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m15 19-7-7 7-7"/>
                        </svg>
                    </Link>
                </Navbar.Brand>
                <div className="flex-1 flex items-center mr-7 justify-center">
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-2xl text-[#f9f7ef] font-semibold">Settings</span>
                </Navbar.Brand>
                </div>
            </Navbar>

            {/* Profile Picture Section */}
            <div className="flex flex-col items-center justify-center bg-[#f9f7ef]">
                <div className="flex flex-col items-center mx-14 my-10">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-2 border-[#f9f7ef]"/>
                    <div>
                        <Button
                            className="text-sm mt-12 bg-[#F09999] border-lg border-[#f7b8b7] enabled:hover:bg-[#f7b8b7] focus:ring-2 focus:ring-[#f7b8b7]"
                            aria-label="Change Profile Picture"
                            onClick={() => setShowModal(true)}>
                            Change Picture
                        </Button>
                    </div>
                </div>
            </div>
            {/* Picture Selection Modal */}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header className="bg-[#f9f7ef] text-[#2c6e49]">Select a Profile Picture</Modal.Header>
                <Modal.Body className="bg-[#f9f7ef] text-[#2c6e49]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full justify-items-center bg-[#f9f7ef]">
                        {pictures.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Profile option ${index + 1}`}
                                className="w-20 h-20 cursor-pointer border-2 border-[#f9f7ef] rounded-full"
                                onClick={() => handlePictureSelect({url: url})}
                            />
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
            {/* Form Section */}
            <div className="bg-[#f9f7ef]">
            <div className="flex max-w-xl flex-col mx-auto gap-7 bg-[#f9f7ef]">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="small" className="text-md" value="First Name"/>
                    </div>
                    <textarea
                        id="small"
                        className="p-2 border border-[#f9f7ef] bg-white rounded-lg w-full h-11 resize-none overflow-hidden"
                        placeholder="Enter first name here.."/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="small" className="text-md" value="Last Name"/>
                    </div>
                    <textarea
                        id="small"
                        className="p-2 border-[#f9f7ef] bg-white rounded-lg w-full h-11 resize-none overflow-hidden"
                        placeholder="Enter last name here.."/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="small" className="text-md" value="Email"/>
                    </div>
                    <textarea
                        id="small"
                        className="p-2 border rounded-lg w-full h-11 bg-white border-[#f9f7ef] resize-none overflow-hidden"
                        placeholder="Email place holder..."/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="small" className="text-md" value=" New Password*"/>
                    </div>
                    <textarea
                        id="small"
                        className="p-2 border rounded-lg w-full h-11 bg-white border-[#f9f7ef] resize-none overflow-hidden"
                        placeholder="..............."/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="small" className="text-md" value=" Confirm Password*"/>
                    </div>
                    <textarea
                        id="small"
                        className="p-2 border rounded-lg w-full h-11 bg-white border-[#f9f7ef] resize-none overflow-hidden"
                        placeholder="..............."/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="large"
                            className="text-md"
                            value="What are your plant goals?"/>
                    </div>
                    <textarea
                        id="large"
                        className="p-4 mb-4 rounded-lg border w-full h-32 bg-white border-[#f9f7ef] resize-none overflow-hidden"
                        placeholder="Enter your goals here..."/>
                </div>
            </div>
            </div>
            {/* Save Changes Button */}
            <div className="flex flex-col items-center justify-center bg-[#f9f7ef]">
                <Button
                    className="text-sm flex flex-col items-center bg-[#F09999] enabled:hover:bg-[#f7b8b7] focus:ring-2 focus:ring-[#f7b8b7] mx-14 mt-10 mb-7"
                    aria-label="Save Changes">
                    Save Changes
                </Button>
            </div>
            {/* Log Out Button */}
            <div className="flex flex-col items-center justify-center bg-[#f9f7ef]">
                <Link href="/login">
                <Button
                    className="text-sm flex flex-col items-center bg-[#DAA520] enabled:hover:bg-[#E5C062] focus:ring-2 focus:ring-[#E5C062] mx-14 mt-10 mb-14"
                    aria-label="Log Out">
                    Log Out
                </Button>
                </Link>
            </div>
        </>
    );
}
