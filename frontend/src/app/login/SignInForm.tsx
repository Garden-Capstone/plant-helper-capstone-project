import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import React from "react";
import {useRouter} from "next/navigation";
import {z} from "zod";
import {Button, Label, TextInput} from "flowbite-react";
import {DisplayError} from "@/app/components/DisplayError";
import {DisplayStatus} from "@/app/components/navigation/DisplayStatus";



const formSchema = z.object({
    profilePassword: z.string({
        required_error: "Password is required to Log In",
        invalid_type_error: "Password must be text"
    }).min(8, { message: 'Please provide a valid password (max 32 characters)' })
        .max(32, { message: 'Please provide a valid password (max 32 characters)' }),
    profileEmail: z.string({
        required_error: 'email is required to sign in',
        invalid_type_error:"email must be a text"
    }).email({ message: 'please provide a valid email (max 128 characters)'})
})

type FormSchema = z.infer<typeof formSchema>

export function SignInForm() {

    const router = useRouter()

    const initialValues = {
        profileEmail: '',
        profilePassword: ''
    }


    const handleSubmit = (values: FormSchema, actions: FormikHelpers<FormSchema>) => {
        const {profileEmail, profilePassword} = values
        const {setStatus} = actions

        fetch('api/sign-in', {
            method: 'POST',
            body: JSON.stringify({profileEmail, profilePassword}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Network response was not ok')
        }).then(json => {
            let type = 'failure'
            if (json.status === 200) {
                router.push('/plant-locker')
            }
            setStatus({type, message: json.message})
        })
    }

        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={toFormikValidationSchema(formSchema)} >
                {SignInFormContent}
            </Formik>
        )
    }

function SignInFormContent(props: FormikProps<FormSchema>) {

    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1"
                               value="Email"
                               className="text-[#2E8B57] text-md font-bold"/>
                    </div>
                    <TextInput className="w-96"
                               id="email1"
                               type="email"
                               value={values.profileEmail}
                               name="profileEmail"
                               onBlur={handleBlur}
                               onChange={handleChange}
                               placeholder="email" required/>
                    <DisplayError errors={errors}
                                  touched={touched}
                                  field={'profileEmail'}/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1"
                               value="Password"
                               className="text-[#2E8B57] text-md font-bold"/>
                    </div>
                    <TextInput className="w-96"
                               id="password1"
                               type="password"
                               value={values.profilePassword}
                               name="profilePassword"
                               onBlur={handleBlur}
                               onChange={handleChange}
                               placeholder="password" required/>
                    <DisplayError errors={errors}
                                  touched={touched}
                                  field={'profilePassword'}/>
                </div>
                <Button className="w-60 mt-10 py-2 bg-[#2E8B57] enabled:hover:bg-[#2c6e49]"
                        type="submit">
                    Sprout Back In!
                </Button>
                <div className="mt-7 mb-8 text-sm">
                    <span>Don't have an account? </span>
                    <a href="/frontend/public" className="text-[#FF9999] hover:text-[#f7b8b7] font-bold">Sign up </a>
                    <span>and Dig In!</span>
                </div>
                <DisplayStatus status={status}/>
            </form>
        </>
    )
}

