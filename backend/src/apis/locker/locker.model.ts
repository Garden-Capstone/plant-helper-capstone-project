import {z} from "zod";
import {sql} from "../../utils/database.utils";


export const LockerSchema = z.object({

    lockerId: z.string({
        required_error: 'Locker ID is required',
        invalid_type_error: 'Please enter a valid Locker ID'
    })
        .uuid({message: 'Please provide a valid UUID'}),
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


export async function selectLockerByProfileId (profileId: string) : Promise <Locker | null> {
    const rowList = await sql`SELECT locker_id, locker_profile_id, locker_plant_id, locker_image_url, locker_name FROM locker WHERE locker_profile_id = ${profileId}`

    const result = LockerSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null

    // 1 to 1 relationship
    // need to add locker creation to profile signup
}


