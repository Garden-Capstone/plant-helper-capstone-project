

type Props = {
    plantimage: {
        image: string,
        alt: string
    }
}

export function Plantimage(props:Props) {


    return (
        <>
                <section className='p-12 float-left'>
                            <img className='max-h-96' src={props.plantimage.image} alt={props.plantimage.alt}/>
                </section>
        </>
    )
}