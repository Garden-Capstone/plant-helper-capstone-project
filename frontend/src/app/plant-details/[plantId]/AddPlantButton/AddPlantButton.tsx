'use client'

import {Session} from "@/utils/session.utils";
import {useRouter} from "next/navigation";
import {ToastError} from "@/app/plant-details/[plantId]/AddPlantButton/ToastError";

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
                        className="px-4 py-3 text-xl font-small text-white bg-[#F09999] hover:bg-[#f7b8b7] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                    Add to Plant Locker
                </button>
        </>
    )
}