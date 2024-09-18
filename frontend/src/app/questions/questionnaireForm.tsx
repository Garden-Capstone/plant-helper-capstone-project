import {z} from "zod";
import {Formik, FormikHelpers} from "formik";
import {Button, Select} from "flowbite-react";
import {DisplayStatus} from "@/app/components/navigation/DisplayStatus";
import {PlantSchema} from "@/utils/models/plant/plant.validator";
import React from "react";
import {DisplayError} from "@/app/components/DisplayError";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {useRouter} from "next/navigation";



const FormSchema = PlantSchema
    .omit({plantId: true, plantName: true, plantSpecies: true, plantDescription: true, plantImageUrl: true, plantToxicity: true, plantPropagation: true, plantMaintenance: true})
    .extend({
        plantWatering: z.string({
            required_error: 'selection is required',
            invalid_type_error: ' please select a valid option'
        }),

        plantSunlight: z.string({
            required_error: 'selection is required',
            invalid_type_error: ' please select a valid option'
        }),
        plantGrowthRate: z.string({
            required_error: 'selection is required',
            invalid_type_error: ' please select a valid option',
        }),
    })
type Form = z.infer <typeof FormSchema>;



export function QuestionnaireForm() {

    const initialValues = {
        plantWatering: '',
        plantSunlight: '',
        plantGrowthRate: ''

    }
    /*
    *
     */
const router= useRouter()

    const handleSubmit = (values: Form, actions: FormikHelpers<Form> ) => {

        const {setStatus,resetForm} = actions
        fetch('/apis/plant/plants/questionnaire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(data => {
                const type = 'failure'
                setStatus({type, message: data.message})
                if (data.status === 200) {
                    resetForm()
                    console.log(data.data)
                    const plantIds = data.data.map((plant:any)=> plant.plantId)
                    console.log(plantIds)
                    router.push(`/questionnaire-results/?q=${plantIds.join()}`)
                }

            })
            .catch(error => {
                console.error(error)
                setStatus({type: 'failure', message: 'An error occurred try again later'})
            })
    }

    return(
        <>
            <Formik initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={toFormikValidationSchema(FormSchema)}>

                {QuestionnaireFormContent}

            </Formik>
        </>
    )
}


export function QuestionnaireFormContent(props:any) {

    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;


    return (
        <>
            <form onSubmit={handleSubmit} className="flex min-h-auto gap-4 min-w-full flex-col grow">
                <div>
                    <fieldset className="flex max-w-md flex-col gap-4">
                        <legend className="mb-4">
                            Question 1: Select the option that best describes the type of sunlight your plant will
                            receive.
                        </legend>
                        <div className="gap-2">
                            <Select
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name={'plantSunlight'}
                                value={values.plantSunlight}>
                                <option
                                    value={''}>
                                </option>
                                <option value={'full sun'}>
                                    full sun
                                </option>
                                <option value={'part shade'}>
                                    part shade
                                </option>
                                <option value={'part sun/part shade'}>
                                    part sun/part shade
                                </option>

                            </Select>
                            <DisplayError field={'plantSunlight'} errors={errors} touched={touched}/>
                        </div>
                    </fieldset>


                    <fieldset className="flex max-w-md flex-col gap-4">
                        <legend className="mb-4">
                            Question 2: Tell us about your availability for watering your plant.
                        </legend>
                        <div className="gap-2">
                            <Select

                                onChange={handleChange}
                                onBlur={handleBlur}
                                name={'plantWatering'}
                                value={values.plantWatering}>
                                <option
                                    value={''}>
                                </option>
                                <option value={'Frequent'}>
                                    Frequent
                                </option>
                                <option value={'Average'}>
                                    Average
                                </option>
                                <option value={'Minimum'}>
                                    Minimum
                                </option>
                            </Select>
                            <DisplayError field={'plantWatering'} errors={errors} touched={touched}/>
                        </div>
                    </fieldset>

                    <fieldset className="flex max-w-md flex-col gap-4">
                        <legend className="mb-4">
                            Question 3: What is the amount of space your plant will have to grow in?
                        </legend>
                        <div className="gap-2">
                            <Select
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name={'plantGrowthRate'}>
                                values={values.plantGrowthRate}
                                <option
                                    value={''}>
                                </option>
                                <option value={'Low'}>
                                    Low
                                </option>
                                <option value={'High'}>
                                    High
                                </option>
                                <option value={'Moderate'}>
                                    Moderate
                                </option>

                            </Select>
                            <DisplayError field={'plantGrowthRate'} errors={errors} touched={touched}/>

                        </div>
                    </fieldset>

                </div>

                <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371]" type="submit">Submit</Button>
                <Button className="bg-[#FF9999] enabled:hover:bg-[#3CB371]" onClick={handleReset}>Reset</Button>
                <DisplayStatus status={status}/>
            </form>


        </>

    )
}

