// 'use client'
//
//
// import {Button, Card, Dropdown, Label, Radio} from "flowbite-react";
// import {PiPottedPlantBold} from "react-icons/pi";
// import React from "react";
//
//
//
// export default function Questionnaire() {
//     return (
//         <>
//             <div
//                 className="fixed inset-0 bg-local top-0 left-0 right-0"
//                 style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     zIndex: '-1'
//                 }}
//             ></div>
//
//             <Card className="flex max-w-lg mx-auto mt-20 overflow-hidden bg-white bg-opacity-90 shadow-2xl">
//                 <div className="flex justify-center pt-16 text-[#2E8B57] text-5xl font-serif">
//                     <PiPottedPlantBold className="text-[#2E8B57]"/>
//                     <p>Plant Whisperer</p>
//                 </div>
//                 <div>
//                     <p className="flex justify-center pb-14 text-[#2E8B57] font-bold">Let's Get Started!</p>
//                     Answering these questions will ensure we recommend the right plants for you!
//                 </div>
//                 <div>
//                     <fieldset className="flex max-w-md flex-col gap-4">
//                         <legend className="mb-4">Question 1: Select the option that best describes the type of
//                             sunlight your plant will receive.
//                         </legend>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question1" name="light" value="full sun" defaultChecked/>
//                             <Label htmlFor="question1">full sun</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question1" name="light" value="part sun"/>
//                             <Label htmlFor="question1">part sun</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question1" name="light" value="part shade"/>
//                             <Label htmlFor="question1">part shade</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question1" name="light" value="full shade"/>
//                             <Label htmlFor="question1">filtered shade</Label>
//                         </div>
//
//                         <legend className="mb-4">Question 2: Tell us about your watering availability for your plant.
//                         </legend>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question2" name="water" value="Frequent" defaultChecked/>
//                             <Label htmlFor="question2">Frequent</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question2" name="water" value="Average"/>
//                             <Label htmlFor="question2">Average</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question2" name="water" value="Minimum"/>
//                             <Label htmlFor="question2">Minimum</Label>
//                         </div>
//
//                         <legend className="mb-4">Question 3: Do you have pets or young children who could be affected by
//                             plant toxicity?
//                         </legend>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question3" name="toxicity" value="yes" defaultChecked/>
//                             <Label htmlFor="question3">Yes</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question3" name="toxicity" value="No"/>
//                             <Label htmlFor="question3">No</Label>
//                         </div>
//
//                         <legend className="mb-4">Question 4: How much space does your plant have to grow?</legend>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question4" name="space" value="Low" defaultChecked/>
//                             <Label htmlFor="question4">Low</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question4" name="space" value="High"/>
//                             <Label htmlFor="question4">High</Label>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Radio id="question4" name="space" value="Moderate"/>
//                             <Label htmlFor="question4">Moderate</Label>
//                         </div>
//                     </fieldset>
//                 </div>
//                 <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371]">
//                     Submit
//                 </Button>
//
//             </Card>
//         </>
//     );
// }


'use client'

import { Button, Card, Label, Radio } from "flowbite-react";
import { PiPottedPlantBold } from "react-icons/pi";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
    light: Yup.string().required('Please select sunlight type'),
    water: Yup.string().required('Please select your watering availability'),
    toxicity: Yup.string().required('Please select an option about toxicity'),
    space: Yup.string().required('Please select how much space is available')
});

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
                    <PiPottedPlantBold className="text-[#2E8B57]" />
                    <p>Plant Whisperer</p>
                </div>
                <div>
                    <p className="flex justify-center pb-14 text-[#2E8B57] font-bold">Let's Get Started!</p>
                    Answering these questions will ensure we recommend the right plants for you!
                </div>

                {/* Formik Form */}
                <Formik
                    initialValues={{
                        light: 'full sun',
                        water: 'Frequent',
                        toxicity: 'yes',
                        space: 'Low',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('Form data:', values);
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <fieldset className="flex max-w-md flex-col gap-4">
                                <legend className="mb-4">
                                    Question 1: Select the option that best describes the type of sunlight your plant will receive.
                                </legend>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="fullSun" name="light" value="full sun" />
                                    <Label htmlFor="fullSun">Full Sun</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="partSun" name="light" value="part sun" />
                                    <Label htmlFor="partSun">Part Sun</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="partShade" name="light" value="part shade" />
                                    <Label htmlFor="partShade">Part Shade</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="fullShade" name="light" value="full shade" />
                                    <Label htmlFor="fullShade">Filtered Shade</Label>
                                </div>
                                <ErrorMessage name="light" component="div" className="text-red-500" />

                                <legend className="mb-4">Question 2: Tell us about your watering availability for your plant.</legend>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="frequentWater" name="water" value="Frequent" />
                                    <Label htmlFor="frequentWater">Frequent</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="averageWater" name="water" value="Average" />
                                    <Label htmlFor="averageWater">Average</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="minimumWater" name="water" value="Minimum" />
                                    <Label htmlFor="minimumWater">Minimum</Label>
                                </div>
                                <ErrorMessage name="water" component="div" className="text-red-500" />

                                {/*<legend className="mb-4">*/}
                                {/*    Question 3: Do you have pets or young children who could be affected by plant toxicity?*/}
                                {/*</legend>*/}
                                {/*<div className="flex items-center gap-2">*/}
                                {/*    <Field as={Radio} id="toxicityYes" name="toxicity" value="yes" />*/}
                                {/*    <Label htmlFor="toxicityYes">Yes</Label>*/}
                                {/*</div>*/}
                                {/*<div className="flex items-center gap-2">*/}
                                {/*    <Field as={Radio} id="toxicityNo" name="toxicity" value="no" />*/}
                                {/*    <Label htmlFor="toxicityNo">No</Label>*/}
                                {/*</div>*/}
                                {/*<ErrorMessage name="toxicity" component="div" className="text-red-500" />*/}

                                <legend className="mb-4">Question 3: How much space does your plant have to grow?</legend>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="lowSpace" name="space" value="Low" />
                                    <Label htmlFor="lowSpace">Low</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="highSpace" name="space" value="High" />
                                    <Label htmlFor="highSpace">High</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Field as={Radio} id="moderateSpace" name="space" value="Moderate" />
                                    <Label htmlFor="moderateSpace">Moderate</Label>
                                </div>
                                <ErrorMessage name="space" component="div" className="text-red-500" />
                            </fieldset>
                            <Button type="submit" className="bg-[#FF9999] enabled:hover:bg-[#3CB371] mt-4">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card>
        </>
    );
}