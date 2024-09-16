'use client'

import Link from "next/link";

export function AddPlantButton() {

    return (
        <>
            <Link href={'/plant-locker'}>
                <button type="button"
                        className="px-6 py-3.5 text-xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to Plant Locker
                </button>
            </Link>
        </>
    )
}