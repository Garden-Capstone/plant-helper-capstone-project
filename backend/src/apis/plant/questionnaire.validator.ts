import {z} from "zod";

export const QuestionnaireSchema = z.object({

plantWatering: z.string().max(32, {message: 'Please select a valid plant watering option.'}),
    plantSunlight: z.string({required_error: 'Please select a valid plant watering option.'}),
    plantGrowthRate: z.string().max(32,{message: 'Please select a valid plant growth option.'}),
})

export type Questionnaire= z.infer<typeof QuestionnaireSchema>