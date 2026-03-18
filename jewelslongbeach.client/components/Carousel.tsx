import { useState, useEffect } from 'react'
import CarouselImage from '../src/assets/components/CarouselImage'

interface CarouselItem {
    id: number,
    content: string,
}

interface CarouselState {
    carouselArray: CarouselItem[]; //data array
    carouselComponent: CarouselItem[]; //this will be rendered
}

interface CarouselResponse {
    items: Array<CarouselItem>,
    status: number
}




function Carousel(){

    const [carouselData, setCarouselData] = useState<CarouselState>({ carouselArray: [], carouselComponent: [] });
    
    const carouselMapper = (i: CarouselItem) => {
		return <CarouselImage content={i.content} key={"carouselImage " + i.id} />;
	};


    const getCarouselImagesSuccess = (r: CarouselResponse) => {
        setCarouselData((prevState) => {
            const cd = { ...prevState };
            cd.carouselArray = r.items;
            cd.carouselComponent = r.items;
            return cd;
        });   
    };


    useEffect(() => {
        getCarouselImagesSuccess({
            items: [
                { id: 1, content: 'image1.jpg' },
                { id: 2, content: 'image2.jpg' }
            ],
            status: 200
        });
    }, []);



    return (
        <>
            <div>
                {carouselData.carouselComponent.map(carouselMapper)}
            </div>
        </>
    )
}



export default Carousel