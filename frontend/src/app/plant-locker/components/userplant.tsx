import {Plant} from "@/utils/models/plant/plant.validator";

type UserPlantCardProps = {
    plant: Plant;
}

export function UserPlant(props: UserPlantCardProps) {

    const { plant } = props
    const {plantName, plantImageUrl, plantId} = plant

    return (
        <>
            <a href={`/user-plant/${plantId}`}>
                <section className='border-0 max-w-sm grid grid-row-2 mx-4 shadow-md p-5 rounded-2xl border-black'>
                    <div className='rounded-lg '>
                            <img className='rounded-2xl h-96 w-full' src={plantImageUrl} alt={plantName}/>
                    </div>
                    <div className='text-2xl font-bold text-center pt-3'>
                        <h5>{plantName}</h5>
                    </div>
                </section>
            </a>
        </>
    )
}