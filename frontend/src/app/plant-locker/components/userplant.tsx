import {Plant} from "@/utils/models/plant/plant.validator";
import {Locker} from "@/utils/models/locker/locker.validator";

type UserPlantCardProps = {
    // plant: Plant;
    locker: Locker;
}

export function UserPlantCard(props: UserPlantCardProps) {

    const {locker} = props
    // const {plantName, plantImageUrl, plantId} = plant
    const {lockerProfileId, lockerImageUrl, lockerName} = locker

    return (
        <>
            {/*<a href={`/user-plant/${plantId}`}>*/}
                <section className='border-0 max-w-sm grid grid-row-2 mx-4 shadow-md p-5 rounded-2xl border-black'>
                    <div className='rounded-lg '>
                            <img className='rounded-2xl h-96 w-full' src={lockerImageUrl} alt={lockerName}/>
                    </div>
                    <div className='capitalize text-2xl font-bold text-center pt-3'>
                        <h5>{lockerName}</h5>
                    </div>
                </section>
            {/*</a>*/}
        </>
    )
}