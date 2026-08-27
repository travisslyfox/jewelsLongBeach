import { useEffect, useRef } from "react";
import GoLongBeach from '../src/assets/images/Go Long Beach.jfif'
import EatDrinkBeMary from '../src/assets/images/Eat Drink Be Mary.jfif'
import JAGC from '../src/assets/images/JAGC.jfif'
import Pride from '../src/assets/images/Pride.jfif'
import "../public/css/carousel.css";

const images= [
  GoLongBeach,
  EatDrinkBeMary,
  JAGC,
  Pride
];

const slideHeight = 300;
const speed = 0.15;

function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const carouselImages = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const loopHeight = images.length * slideHeight;

    const animate = () => {
      positionRef.current += speed;

      if (positionRef.current >= loopHeight) {
        positionRef.current -= loopHeight;
      }

      track.style.transform = `translate3d(0, -${positionRef.current}px, 0)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);


  return (
    <div className="page">
      <div className="carousel">
        <div ref={trackRef} className="carouselTrack">
          {carouselImages.map((src, index) => (
            <div className="carouselItem" key={`${src}-${index}`}>
              <img
                src={src}
                alt=""
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;