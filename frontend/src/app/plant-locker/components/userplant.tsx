

type Props = {
    userplant: {
        image: string,
        alt: string,
        name: string
    }
}

export function UserPlant(props:Props) {


    return (
        <>
            <a href='/frontend/public' className=''>
                <section className='border-0 max-w-sm grid grid-row-2 mx-4 shadow-md p-5 rounded-2xl border-black'>
                    <div className='rounded-lg '>
                            <img className='rounded-2xl h-96 w-full' src={props.userplant.image} alt={props.userplant.alt}/>
                    </div>
                    <div className='text-2xl font-bold text-center pt-3'>
                        <h5>{props.userplant.name}</h5>
                    </div>
                </section>
            </a>
        </>
    )
}