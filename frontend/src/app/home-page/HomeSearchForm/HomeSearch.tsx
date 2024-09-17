'use client'
import {z} from "zod";
import {useRouter} from "next/navigation";
import {Formik, FormikHelpers} from "formik";
import React from "react";


const formSchema = z.object ({
    searchTerm: z.string().max(97, {message: 'Not a searchable term'})
})


export function HomeSearch() {

    const router = useRouter()

    const initialValues = {
        searchTerm: '',
    }

    const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
        const { searchTerm } = values
        const { setStatus, resetForm } = actions

        router.push (`/search-results/?q=${searchTerm}`)
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
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500"
                             aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 20 20">
                            <path stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search"
                           id="default-search"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#2E8B57] focus:border-[#2E8B57]"
                           placeholder="Planty of Info Here"
                           name={'searchTerm'}
                           value={values.searchTerm}
                           onBlur={handleBlur}
                           onChange={handleChange}required/>
                    <button type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-[#3CB371] hover:bg-[#FF9999] focus:ring-4 focus:outline-none focus:ring-[#2E8B57] font-medium rounded-lg text-sm px-4 py-2">Search
                    </button>
                </div>
            </form>
        </>
    )
}