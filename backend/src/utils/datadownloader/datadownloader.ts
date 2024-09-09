import {insertPlant, Plant} from "../../apis/plant/plant.model";


async function dataDownloader() {

    let page = 1
    do {
        let data = await fetch(`https://perenual.com/api/species-list?key=${process.env.PERENUAL_API_KEY}&indoor=1&page=${page}`).then(res => res.json())

        page++
        console.log(data)
        console.log(data.data)
        console.log(data.data.length)

        let perenualPlant = await fetch(`https://perenual.com/api/species/details/${data.data[0].id}?key=${process.env.PERENUAL_API_KEY}`).then(res => res.json())

        console.log(perenualPlant)


        const plant : Plant = {
        plantId: '',
        plantName: perenualPlant.common_name,
        plantSpecies: perenualPlant.scientific_name,
        plantDescription: perenualPlant.description,
        plantImageUrl: perenualPlant.original_url,
        plantWatering: perenualPlant.watering,
        plantSunlight: perenualPlant.sunlight,
        plantGrowthRate: perenualPlant.growth_rate,
        plantToxicity: perenualPlant.poisonous_to_pets || perenualPlant.poisonous_to_humans,
        plantMaintenance: perenualPlant.maintenance,
        plantPropagation: perenualPlant.propagation
        }

        insertPlant(plant)


    } while (false)
}

dataDownloader().catch(error => console.error(error))