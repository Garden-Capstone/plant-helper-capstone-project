import {z} from 'zod';
import {sql} from "../../utils/database.utils";
import {Plant, PlantSchema} from "../plant/plant.model";

/**
 * @property progressId {sting} primaryKey
 * @property progressLockerId {string} foreignKey to the locker table
 * @property progressImageURL {string} image associated with plant progress
 * @property progressNote {string} the note associated with plant progress
 * @property progressDateTime {string} the date and time the progress was created
 */


export const ProgressSchema = z.object({

    progressId: z.string({
        required_error: 'progress is required',
        invalid_type_error: 'Please enter a valid progress ID'
    })
        .uuid({message: 'Please provide a valid UUID'}),

    progressLockerId: z.string({
        required_error: 'Progress Locker ID is required',
        invalid_type_error: 'Please enter a valid Progress Locker ID'
    })
        .uuid({message: 'Please provide a valid UUID'}),
    progressImageURL: z.string({
        required_error: 'Progress Image URL is required',
        invalid_type_error: 'Please enter a valid Progress Image URL'
    })
        .trim()
        .url({message: 'Please provide a valid URL'})
        .max(255, { message: 'Plant Image URL is too long.'})
        .nullable(),

    progressNote: z.string({
        required_error: 'Progress Note is required',
        invalid_type_error: 'Please enter a valid Progress Note'
    })
        .max(32, {message: 'Please provide a note under 32 characters'})
        .nullable(),

    progressDateTime: z.coerce.date({
        required_error: 'Please provide a valid progress DateTime or null',
        invalid_type_error: 'progress date time is not a valid date'
    })
        .nullable(),


})

export type Progress = z.infer<typeof ProgressSchema>

/**
 *@param progress
 *@returns 'progress successfully posted'
 */
export async function insertProgress (progress:Progress ): Promise<string> {
    const {progressId, progressLockerId, progressImageURL, progressNote, progressDateTime} = progress;

//     sql query to insert progress
    await sql`INSERT INTO progress (progress_id, progress_locker_id, progress_image_url, progress_note, progress_date_time)
VALUES(gen_random_uuid(), ${progressLockerId},${progressImageURL},${progressNote},${progressDateTime})`;

    return'Progress successfully posted.';
}

/**
 *
 * @param progress
 * @return {Promise<string>} 'Progress successfully updated'
 */
 export async function updateProgress (progress:Progress ): Promise<string> {
     const {progressId, progressLockerId, progressImageURL, progressNote, progressDateTime} = progress;

//      execute the sql query to update the progress
    await sql`UPDATE progress
        SET progress_locker_id = ${progressId},
            progress_note = ${progressNote},
            progress_date_time = ${progressDateTime},
            progress_image_url = ${progressImageURL}
            WHERE progress_id = ${progressId}`

        return 'Progress successfully updated.';
}

/**
 *@returns all progress
 */

export async function selectProgressByProgressId(progressId: string) : Promise<Progress | null> {
    const rowList = <Progress[]>await sql`SELECT progress_id,progress_locker_id,progress_image_url, progress_note, progress_date_time FROM progress WHERE progress_id = ${progressId}`

    const result = ProgressSchema.array().max(1).parse(rowList)

    return result.length === 0 ? null : result[0]
}

export async function selectProgressByProgressLockerId(progressLockerId: string) : Promise<Progress[] | null> {
    const rowList = <Progress[]>await sql`SELECT progress_id, progressLockerId, progressImageUrl, progressNote, progressDateTime FROM progress WHERE progress_locker_id = ${progressLockerId}`

    return ProgressSchema.array().parse(rowList)
}

