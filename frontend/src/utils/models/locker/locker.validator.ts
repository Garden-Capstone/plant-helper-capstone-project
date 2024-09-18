import {z} from "zod";

export const LockerSchema = z.object({
    lockerId: z.string({
        required_error: 'Locker ID is required',
    }).uuid({message: 'Please provide a valid UUID'}),
    lockerProfileId: z.string({
        required_error: 'Locker Profile ID is required',
    }).uuid({message: 'Please provide a valid UUID'}),
    lockerPlantId: z.string({
        required_error: 'Locker Plant ID is required',
    }).uuid({message: 'Please provide a valid UUID'}),
    lockerImageUrl: z.string({
        required_error: 'Locker Plant Image URL is required',
    }).url({message: 'Please provide a valid Image URL'})
        .nullable(),
    lockerName: z.string({
        required_error: 'Locker Name is required',
    }).max(32, {message: 'Please enter a valid Name'})
        .nullable(),
})

export type Locker = z.infer<typeof LockerSchema>