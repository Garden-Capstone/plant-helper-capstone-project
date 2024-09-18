import {insertPlant, Plant} from "../../apis/plant/plant.model";


async function dataDownloader() {

    let page = 4
    do {
        let data = await fetch(`https://perenual.com/api/species-list?key=${process.env.PERENUAL_API_KEY}&indoor=1&page=${page}`).then(res => res.json())

        page++

        for (let item of data.data) {


            let perenualPlant = await fetch(`https://perenual.com/api/species/details/${item.id}?key=${process.env.PERENUAL_API_KEY}`).then(res => res.json())

            if (perenualPlant.default_image === null) continue

            const plant: Plant = {
                plantId: '',
                plantName: perenualPlant.common_name,
                plantSpecies: perenualPlant.scientific_name,
                plantDescription: perenualPlant.description,
                plantImageUrl: perenualPlant.default_image.original_url,
                plantWatering: perenualPlant.watering,
                plantSunlight: perenualPlant.sunlight,
                plantGrowthRate: perenualPlant.growth_rate,
                plantToxicity: perenualPlant.poisonous_to_pets || perenualPlant.poisonous_to_humans,
                plantMaintenance: perenualPlant.maintenance,
                plantPropagation: perenualPlant.propagation
            }

            console.log(perenualPlant)
            console.log(page)

            await insertPlant(plant)
        }

    } while (false)
}

dataDownloader().catch(error => console.error(error))