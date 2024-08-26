

type Props = {
    plantimage: {
        image: string,
        alt: string
    }
}

export function Plantimage(props:Props) {


    return (
        <>
                <section className='p-14 float-left'>
                            <img className='rounded-2xl' src={props.plantimage.image} alt={props.plantimage.alt}/>
                </section>
        </>
    )
}