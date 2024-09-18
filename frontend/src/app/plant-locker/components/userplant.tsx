

import {Locker} from "@/utils/models/locker/locker.validator";
import {fetchPlantByPlantId} from "@/utils/models/plant/plant.model";

type UserPlantCardProps = {

    locker: Locker;
}

export async function UserPlantCard(props: UserPlantCardProps) {
    const {locker} = props;

    const {lockerId, lockerProfileId, lockerImageUrl, lockerName} = locker
    const plant = await fetchPlantByPlantId(locker.lockerPlantId)

    return (
        <>
            <a href={`/user-plant/${plant.plantId}`} className=''>
                <section className='border-0 max-w-sm grid grid-row-2 mx-4 shadow-lg p-3 bg-white rounded-2xl border-black'>
                    <div className='rounded-lg'>
                            <img className='rounded-2xl h-80 w-full' src={plant.plantImageUrl} alt={plant.plantName} />
                    </div>
                    <div className='font-serif text-[#2C6E49] capitalize text-3xl font-bold text-center pt-3'>
                        <h5>{plant.plantName}</h5>
                    </div>
                </section>
            </a>
        </>
    )
}