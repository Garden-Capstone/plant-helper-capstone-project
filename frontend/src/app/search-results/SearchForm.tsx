'use client'
import {z} from "zod";
import {useRouter} from "next/navigation";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import React from "react";
import {FloatingLabel, TextInput} from "flowbite-react";

const formSchema = z.object ({
    searchTerm: z.string().max(97, {message: 'Not a searchable term'})
})


export function SearchForm() {

    const router = useRouter()

    const initialValues = {
        searchTerm: '',
    }

    const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
        const { searchTerm } = values
        const { setStatus, resetForm } = actions

        router.push (`/search-results/?q=${searchTerm}`)

     // todo get access to the router object using useRouter (on the top of SearchForm)
        // using the router object redirect to the search results page with searchTerm = searchParam (q)

    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}>
            {SearchFormContent}
        </Formik>
    )
}

function SearchFormContent(props: any) {

    const {
        handleChange,
        handleBlur,
        values,
        handleSubmit,
        handleReset
    } = props;

    return(
        <>

                <div className="text-[#F9F7EF] mt-2">
                    <form onSubmit={handleSubmit}>
                        <FloatingLabel
                            variant="outlined"
                            label="Search Plants..."
                            style={{width: '400px'}}
                            className="bg-[#2C6E49] text-[#F9F7EF] hover:text-[#F9F7EF] focus:text-[#F9F7EF] focus:ring-4 focus:ring-[#F9F7EF]"
                            name={'searchTerm'}
                            value={values.searchTerm}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            id='searchTerm'
                            type='text'
                        />
                    </form>
                </div>

        </>
)
}