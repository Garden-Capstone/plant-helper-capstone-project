'use server'

import { unstable_noStore as noStore } from 'next/cache'


import {Plant, PlantSchema} from "@/utils/models/plant/plant.validator";

export async function fetchAllPlants() : Promise<Plant[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plant/`,{
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
    if (plantName === '') {
        return []
    }
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plant/plantsByName/${plantName}`,{
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

export async function fetchPlantByPlantId(plantId : string) {

    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/plant/${plantId}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }else {
            return response.json()
        }
    })
    return PlantSchema.parse(data)
}