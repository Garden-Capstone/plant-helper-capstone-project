'use client'
import {z} from "zod";
import {useRouter} from "next/navigation";
import {Formik, FormikHelpers} from "formik";
import React from "react";


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

            <form onSubmit={handleSubmit} className="mx-auto">
                <label htmlFor="default-search"></label>
                <div className="relative">
                    <input type="text"
                           id="searchTerm"
                           className="block w-full p-3 md:w-96 text-white bg-[#2C6E49] border border-white hover:border-2 rounded-lg focus:ring-white focus:border-white placeholder-white"
                           placeholder="Search"
                           name={'searchTerm'}
                           value={values.searchTerm}
                           onBlur={handleBlur}
                           onChange={handleChange}
                           required
                    />
                </div>
            </form>
        </>
    )
}