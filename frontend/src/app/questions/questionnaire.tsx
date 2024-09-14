'use client'


import {Button, Card, Dropdown, Label, Radio} from "flowbite-react";
import {PiPottedPlantBold} from "react-icons/pi";
import React from "react";



export default function Questionnaire() {
    return (
        <>
            <div
                className="fixed inset-0 bg-local top-0 left-0 right-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: '-1'
                }}
            ></div>

            <Card className="flex max-w-lg mx-auto mt-20 overflow-hidden bg-white bg-opacity-90 shadow-2xl">
                <div className="flex justify-center pt-16 text-[#2E8B57] text-5xl font-serif">
                    <PiPottedPlantBold className="text-[#2E8B57]"/>
                    <p>Plant Whisperer</p>
                </div>
                <div>
                    <p className="flex justify-center pb-14 text-[#2E8B57] font-bold">Let's Get Started!</p>
                    Answering these questions will ensure we recommend the right plants for you!
                </div>
                <div>
                    <fieldset className="flex max-w-md flex-col gap-4">
                        <legend className="mb-4">Question 1: Select the option that best describes the type of
                            sunlight your plant will receive.
                        </legend>
                        <div className="flex items-center gap-2">
                            <Radio id="question1" name="light" value="full sun" defaultChecked/>
                            <Label htmlFor="question1">full sun</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question1" name="light" value="part sun"/>
                            <Label htmlFor="question1">part sun</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question1" name="light" value="part shade"/>
                            <Label htmlFor="question1">part shade</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question1" name="light" value="full shade"/>
                            <Label htmlFor="question1">filtered shade</Label>
                        </div>

                        <legend className="mb-4">Question 2: Tell us about your watering availability for your plant.
                        </legend>
                        <div className="flex items-center gap-2">
                            <Radio id="question2" name="water" value="Frequent" defaultChecked/>
                            <Label htmlFor="question2">Frequent</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question2" name="water" value="Average"/>
                            <Label htmlFor="question2">Average</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question2" name="water" value="Minimum"/>
                            <Label htmlFor="question2">Minimum</Label>
                        </div>

                        <legend className="mb-4">Question 3: Do you have pets or young children who could be affected by
                            plant toxicity?
                        </legend>
                        <div className="flex items-center gap-2">
                            <Radio id="question3" name="toxicity" value="yes" defaultChecked/>
                            <Label htmlFor="question3">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question3" name="toxicity" value="No"/>
                            <Label htmlFor="question3">No</Label>
                        </div>

                        <legend className="mb-4">Question 4: How much space does your plant have to grow?</legend>
                        <div className="flex items-center gap-2">
                            <Radio id="question4" name="space" value="Low" defaultChecked/>
                            <Label htmlFor="question4">Low</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question4" name="space" value="High"/>
                            <Label htmlFor="question4">High</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="question4" name="space" value="Moderate"/>
                            <Label htmlFor="question4">Moderate</Label>
                        </div>
                    </fieldset>
                </div>
                <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371]">
                    Submit
                </Button>

            </Card>
        </>
    );
}