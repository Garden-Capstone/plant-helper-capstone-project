import { z } from 'zod'
import { sql } from '../../utils/database.utils'

/**
 * The shape of the private profile that is only used by express. it must never be returned to the controller.
 * @property profileId {string} the primary key
 * @property profileUsername {varchar} unique
 * @property profileImage {varchar} the profile's pic
 * @property profileHash {string|null} the profile's hash
 * @property profileActivationToken {char} the profile's activation
 * @property profileGoal {varchar} the profile's goal
 * @property profileEmail {varchar} unique
 **/
export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'
    })
        .uuid({ message: 'please provide a valid profileId' }),
    profileGoal: z.string({
        required_error: 'profile goal is a required field.',
        invalid_type_error: 'please provide a valid profile goal'
    })
        .max(255, { message: 'profile goal length is too long' })
        .nullable(),
    profileActivationToken: z.string({
        required_error: 'profileActivationToken is required',
        invalid_type_error: 'please provide a valid profileActivationToken'
    })
        .length(32, { message: 'profile activation token is too long' })
        .nullable(),
    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: ' please provide a valid profileEmail'
    })
        .email({ message: 'please provide a valid email' })
        .max(255, { message: 'profileEmail is too long' }),
    profileHash: z.string({
        required_error: 'profileHash is required',
        invalid_type_error: 'please provide a valid profileHash'
    })
        .length(97, { message: 'profile hash must be 97 characters' }),
    profileImage: z.string({
        required_error: 'profileImage is required',
        invalid_type_error: 'please provide a valid profileImageUrl'
    })
        .trim()
        .url({ message: 'please provide a valid profile image url' })
        .max(255, { message: 'profile image url is to long' })
        .nullable(),
    profileUsername: z.string({
        required_error: 'profileUsername is required',
        invalid_type_error: 'please provide a valid profileUsername'
    })
        .trim()
        .min(1, { message: 'please provide a valid profile username (min 1 characters)' })
        .max(32, { message: 'please provide a valid profile username (max 32 characters)' })

})
export type PrivateProfile = z.infer<typeof PrivateProfileSchema>

export const PublicProfileSchema = PrivateProfileSchema.omit({profileHash: true, profileActivationToken: true, profileEmail: true})

export type PublicProfile = z.infer<typeof PublicProfileSchema>

export async function insertProfile (profile: PrivateProfile): Promise<string> {
    const {profileUsername, profileImage, profileHash, profileActivationToken, profileGoal, profileEmail} = profile

    await sql`INSERT INTO profile (profile_id, profile_username, profile_image, profile_hash, profile_activation_token, profile_goal, profile_email) VALUES (gen_random_uuid() , ${profileUsername}, ${profileImage}, ${profileHash}, ${profileActivationToken}, ${profileGoal}, ${profileEmail})`
    return 'Profile Successfully Created'
}

export async function updateProfile (profile: PrivateProfile) : Promise<string> {
    const { profileId, profileUsername, profileImage, profileHash, profileActivationToken, profileGoal, profileEmail } = profile
    await sql`UPDATE profile SET profile_username = ${profileUsername}, profile_image = ${profileImage}, profile_hash = ${profileHash}, profile_activation_token = ${profileActivationToken}, profile_goal = ${profileGoal}, profile_email = ${profileEmail} WHERE profile_id = ${profileId}`
    return 'Profile successfully updated'
}

export async function selectPrivateProfileByProfileEmail (profileEmail: string) : Promise<PrivateProfile | null> {
    const rowList = await sql`SELECT profile_id, profile_username, profile_image, profile_hash, profile_activation_token, profile_goal, profile_email FROM profile WHERE profile_email = ${profileEmail}`

    const result = PrivateProfileSchema.array().max(1).parse(rowList)

    return result?.length === 1 ? result[0] : null
}

export async function selectPrivateProfileByProfileActivationToken (profileActivationToken: string) : Promise<PrivateProfile|null> {

    const rowList = await sql`SELECT profile_id, profile_username, profile_image, profile_hash, profile_activation_token, profile_goal, profile_email FROM profile WHERE profile_activation_token = ${profileActivationToken}`

    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}


export async function selectProfileByProfileId (profileId: string) : Promise<PublicProfile | null> {

    const rowList = await sql`SELECT profile_id, profile_username, profile_image, profile_goal FROM profile WHERE profile_id = ${profileId}`

    const result = PublicProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}


export async function selectPrivateProfileByProfileId(profileId: string): Promise<PrivateProfile | null> {

    const rowList = await sql`SELECT profile_id, profile_goal, profile_activation_token, profile_email, profile_hash, profile_image, profile_username FROM profile WHERE profile_id = ${profileId}`

    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}



