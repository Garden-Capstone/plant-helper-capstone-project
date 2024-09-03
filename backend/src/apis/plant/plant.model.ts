import {z} from "zod";
import {sql} from "../../utils/database.utils";

/*
* @property plantId {string} the primary key
* @property plantName {string} the plant name
* @property plantSpecies {string} the plant species
* @property plantDescription {string} the plant description
* @property plantImageUrl {string} the plant Image URL
* @property plantWatering {string} the plant watering description
* @property plantSunlight {string} the plant sunlight description
* @property plantGrowthRate {string} the plant growth rate
* @property plantToxicity {string} the plant toxicity rating
* @property plantPropagation {string} the plant propagation methods
* @property plantMaintenance {string} the plant maintenance level
* */

export const  PlantSchema = z.object ({
    plantId : z.string({
        required_error : 'Plant ID is required',
        invalid_type_error : 'Please provide a valid Plant ID'
    })
        .uuid ({ message: 'Please provide a valid Plant ID.'}),
    plantName : z.string({
        required_error: 'Plant Name is required',
        invalid_type_error: 'Please provide a valid Plant Name'
    })
        .max(97, { message: 'Plant Name is too long.'}),
    plantSpecies : z.string({
        required_error: 'Plant Species is required',
        invalid_type_error: 'Please provide a valid Plant Species'
    })
        .max(97, {message : 'Plant Species is too long.'})
        .nullable(),
    plantDescription : z.string({
        required_error: 'Plant Description is required',
        invalid_type_error: 'Please provide a valid Plant Description'
    })
        .max(255, { message: 'Plant Description is too long.'})
        .nullable(),
    plantImageUrl : z.string({
        required_error: 'Plant Image URL is required',
        invalid_type_error: 'Please provide a valid Plant Image URL'
    })
        .max(255, { message: 'Plant Image URL is too long.'}),
    plantWatering : z.string({
        required_error: 'Plant Watering is required',
        invalid_type_error: 'Please provide valid Plant Watering',
    })
        .max(32, { message: 'Plant Watering is too long.'})
        .nullable(),
    plantSunlight : z.string({
        required_error: 'Plant Sunlight is required',
        invalid_type_error: 'Please provide valid Plant Sunlight'
    })
        .max(32, { message: 'Plant Sunlight is too long.'})
        .nullable(),
    plantGrowthRate : z.string({
        required_error: 'Plant Growth Rate is required',
        invalid_type_error: 'Please provide valid Plant Growth Rate'
    })
        .max(32, { message: 'Plant Growth is too long.'})
        .nullable(),
    plantToxicity : z.string({
        required_error: 'Plant Toxicity is required',
        invalid_type_error: 'Please provide valid Plant Toxicity'
    })
        .max(5, { message: 'Plant Toxicity is too long.'})
        .nullable(),
    plantPropagation : z.string({
        required_error: 'Plant Propagation is required',
        invalid_type_error: 'Please provide valid Plant Propagation'
    })
        .max(64, { message: 'Plant Propagation is too long.'})
        .nullable(),
    plantMaintenance : z.string({
        required_error: 'Plant Maintenance is required',
        invalid_type_error: 'Please provide valid Plant Maintenance'
    })
        .max(64, { message: 'Plant Maintenance is too long.'})
        .nullable(),
})

export type Plant = z.infer<typeof PlantSchema>

export async function selectAllPlants () : Promise<Plant[]> {

    const rowList = <Plant[]>await sql`SELECT plant_id, plant_name, plant_species, plant_description, plant_image_url, plant_watering, plant_sunlight, plant_growth, plant_toxicity, plant_propagation, plant_maintenance FROM plant ORDER BY plant_id DESC`

    return PlantSchema.array().parse(rowList)
}

export async function selectPlantByPlantId(plantId : string): Promise<Plant[]> {

    const rowList = <Plant[]>await sql`SELECT plant_id, plant_name, plant_species, plant_description, plant_image_url, plant_watering, plant_sunlight, plant_growth, plant_toxicity, plant_propagation, plant_maintenance FROM plant WHERE plant_id = ${plantId}`

}