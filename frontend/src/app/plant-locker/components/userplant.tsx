
import {Plant} from "@/utils/models/plant/plant.validator";
import {Locker} from "@/utils/models/locker/locker.validator";
import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";

type UserPlantCardProps = {

    locker: Locker;
}

export async function UserPlantCard(props: UserPlantCardProps) {
    const {locker} = props;

    const {lockerId, lockerProfileId, lockerImageUrl, lockerName} = locker
    const plant = await fetchPlantByPlantId(locker.lockerPlantId)
    console.log(plant)
    return (
        <>
            {/*<a href={`/user-plant/${plantId}`}>*/}
                <section className='border-0 max-w-sm grid grid-row-2 mx-4 shadow-md p-5 rounded-2xl border-black'>
                    <div className='rounded-lg '>
                            <img className='rounded-2xl h-96 w-full' src={plant.plantImageUrl} alt={plant.plantName} />
                    </div>
                    <div className='capitalize text-2xl font-bold text-center pt-3'>
                        <h5>{plant.plantName}</h5>
                    </div>
                </section>
            {/*</a>*/}
        </>
    )
}