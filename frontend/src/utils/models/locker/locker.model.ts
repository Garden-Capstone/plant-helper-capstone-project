import {PlantSchema} from "@/utils/models/plant/plant.validator";
import {LockerSchema} from "@/utils/models/locker/locker.validator";


export async function fetchLockersByProfileId (profileId: string) {

    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/locker/lockerProfileId/${profileId}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')
        } else {
            return response.json()
        }
    })
    return LockerSchema.array().parse(data)
}

