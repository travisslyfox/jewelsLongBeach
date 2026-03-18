interface CarouselImageProps{
    content: string,
    key: string
}




function CarouselImage(props: CarouselImageProps){




    return (
        <>
            <img src={`data:image/png;base64,${props.content}`}/>
        </>
    )
}



export default CarouselImage