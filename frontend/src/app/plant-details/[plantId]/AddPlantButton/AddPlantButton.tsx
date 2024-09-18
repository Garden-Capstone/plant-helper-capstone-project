'use client'

import {Session} from "@/utils/session.utils";
import {useRouter} from "next/navigation";

export function AddPlantButton(props : {plantId : string, session : Session}) {
    const plantId = props.plantId
    const session = props.session;
    const router = useRouter()

    return (

        <>

                <button type="button" onClick={() => {
                    const locker = {lockerId: null, lockerPlantId : plantId, lockerProfileId: session.profile.profileId, lockerImageUrl: null, lockerName: null}
                    fetch(`/apis/locker/`, {
                        method: "POST",
                        headers : {
                          "content-type": "application/json",
                            "authorization": session?.authorization,
                        },
                        credentials: 'include',
                        body: JSON.stringify(locker)
                    }).then(response => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('Network response was not ok')
                    })
                        .then(json => {
                            if(json.status === 200) {
                                router.push('/plant-locker')
                            }
                        })
                }}
                        className="px-6 py-3.5 text-xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to Plant Locker
                </button>
        </>
    )
}