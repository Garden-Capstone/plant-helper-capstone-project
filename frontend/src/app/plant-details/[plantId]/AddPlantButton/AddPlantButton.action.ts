'use server'



import {setHeaders} from "@/utils/setHeaders";

export async function AddPlantButtonAction (locker: any) {

    const result = await fetch(`/apis/locker/`, {
        method: "POST",
        headers : await setHeaders(),
        credentials: 'include',
        body: JSON.stringify(locker)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Network response was not ok')
        })
    console.log(result)
    return result.status === 200? true : false
}

