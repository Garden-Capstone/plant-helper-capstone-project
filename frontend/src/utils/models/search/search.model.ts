'use server'


import {Plant, PlantSchema} from "@/utils/models/search/search.validator";

export async function fetchAllPlants() : Promise<Plant[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plants`,{
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
    return PlantSchema.array().parse(data)
}

export async function fetchPlantsByPlantName(plantName : string) {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plants/plantName${plantName}`,{
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
    return PlantSchema.array().parse(data)
}