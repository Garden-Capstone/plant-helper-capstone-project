import {z} from "zod";
import {sql} from "../../utils/database.utils";


export const LockerSchema = z.object({

    lockerId: z.string({
        required_error: 'Locker ID is required',
        invalid_type_error: 'Please enter a valid Locker ID'
    })
        .uuid({message: 'Please provide a valid UUID'})
        .nullable(),
    lockerProfileId: z.string({
        required_error: 'Locker Profile ID is required',
        invalid_type_error: 'Please enter a valid Locker Profile ID'
    })
        .uuid({message: 'Please provide a valid Profile UUID'}),
    lockerPlantId: z.string({
        required_error: 'Locker Plant ID is required',
        invalid_type_error: 'Please enter a valid Locker Plant ID'
    })
        .uuid({message: 'Please provide a valid Plant UUID'}),
    lockerImageUrl: z.string({
        required_error: 'Locker Image URL is required',
        invalid_type_error: 'Please provide a valid Locker Image Url'
    })
        .trim()
        .url({message: 'Please provide a valid URL'})
        .max(255, {message: 'Locker Image Url is too long'})
        .nullable(),
    lockerName: z.string({
        required_error: 'Locker Name is required',
        invalid_type_error: 'Please enter a valid Locker Name'
    })
        .max(32, {message: 'Locker name is too long'})
        .nullable(),
})

export type Locker = z.infer<typeof LockerSchema>;


export async function selectLockersByProfileId (profileId: string) : Promise <Locker[]> {
    const rowList = await sql`SELECT locker_id, locker_profile_id, locker_plant_id, locker_image_url, locker_name FROM locker WHERE locker_profile_id = ${profileId}`

     return LockerSchema.array().parse(rowList)
}


export async function insertLocker (locker : Locker) : Promise <string> {

    const {lockerId, lockerProfileId, lockerPlantId, lockerImageUrl, lockerName} = locker;

    await sql`INSERT INTO locker (locker_id, locker_profile_id, locker_plant_id, locker_image_url, locker_name) VALUES (gen_random_uuid(), ${locker.lockerProfileId}, ${locker.lockerPlantId}, ${lockerImageUrl}, ${lockerName})`;

    return 'Locker Successfully Created.';
}

export async function selectLockerByLockerId (lockerId : string) : Promise <Locker[]> {
    const rowList = await sql`SELECT locker_id, locker_profile_id, locker_plant_id, locker_image_url, locker_name FROM locker WHERE locker_id = ${lockerId}`

    return LockerSchema.array().parse(rowList)
}