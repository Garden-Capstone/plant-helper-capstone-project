import {z} from "zod";
import {FormikProps} from "formik";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayStatus} from "@/app/components/navigation/DisplayStatus";


const PlantSchema = PlantSchema
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
            invalid_type_error: ' please select a valid option'
        }),



type Questions = z.infer< typeof PlantSchema>
export function QuestionnaireForm() {

    const initialValues = {
        plantWatering: '',
        plantSunlight: '',
        plantGrowthRate: ''

    }
    /*
    *
     */


    const handleSubmit = (values: Questions, actions: FormikHelpers<Questions> ) => {
        const {setStatus, resetForm} = actions
        fetch('/apis/questionnaireForm', {
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
                if (data.staus === 200) {
                    resetForm()
                }

            })
            .catch(error => {
                console.error(error)
                setStatus({type: 'failure', message: 'An error occurred try again later'})
            })
    }

    return(
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={toFormikValidationSchema(PlantSchema)}>

                {questionnaireForm}

            </Formik>
        </>
    )
}


export function QuestionnaireForm(props: FormikProps<Questions>) {

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
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="email"/>
                    </div>
                    <TextInput
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    <DisplayError errors={errors} touched={touched} />
                </div>

                <Button color={'success'} type="submit">Submit</Button>
                <Button  color={'failure'} type="reset" onClick={handleReset}>Reset</Button>
                <DisplayStatus status={status}/>
            </form>
            <FormDebugger {...props} />
        </>

    )
}