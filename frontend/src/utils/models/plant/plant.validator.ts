import {z} from "zod";

export const PlantSchema = z.object({
        plantId: z.string({
            required_error: 'Please provide a valid plantId or null'
        }).uuid({message: 'Please provide a valid uuid for plantId'}),
        plantName: z.string().max(97, {message: 'Please provide a valid plant name.'}),
        plantSpecies: z.string({required_error: 'Please provide a valid plant species.'}).array(),
        plantDescription: z.string({ required_error: 'Please provide a valid plant description.'}),
        plantImageUrl: z.string({
            required_error: 'Please provide a valid plant image url'
        }).url({message: 'Plant image url must be a url'}),
        plantWatering: z.string().max(32, {message: 'Please provide a valid plant watering length.'}),
        plantSunlight: z.string({required_error: 'Please provide a valid plant watering.'}).array(),
        plantGrowthRate: z.string().max(32,{message: 'Please provde a valid plant growth rate.'}),
        plantToxicity: z.string().max(5,{message: 'Please provide a valid plant toxicity.'}),
        plantPropagation: z.string({ required_error: 'Please provide valid plant propagation'}).array(),
        plantMaintenance: z.string().max(64,{message: 'Please provide a valid plant maintenance.'}),
})

export type Plant = z.infer<typeof PlantSchema>