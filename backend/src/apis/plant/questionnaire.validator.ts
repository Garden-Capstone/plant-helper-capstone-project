import {z} from "zod";

export const Questionnaire = z.object({

plantWatering: z.string().max(32, {message: 'Please select a valid plant watering option.'}),
    plantSunlight: z.string({required_error: 'Please select a valid plant watering option.'}).array(),
    plantGrowthRate: z.string().max(32,{message: 'Please select a valid plant growth option.'}).nullable(),
})

export type Plant = z.infer<typeof Questionnaire>