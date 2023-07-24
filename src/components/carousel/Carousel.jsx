import React, { useState } from 'react';
import './carousel.scss';
import Slide from './Slide';

function Carousel() {
    const slides = [
        {
            id: 1,
            name: "slide 1",
            projects: [
                {
                    id: 123,
                    title: "Avasta Tartut",
                    subtext: "Aasta tegija võistlus 2023. 1.koht UX/UI disainerite kutsevõistlustel.",
                    image: "avasta_tartut.jpg",
                },
                {
                    id: 124,
                    title: "UX/UI disaini portfoolio",
                    subtext: "UX/UI disaineri erialal (Tartu Rakenduslik Kolledž) õpingute raames loodud portfoolio",
                    image: "arenguportfoolio.jpg",
                }
            ]
        },
        {
            id: 2,
            name: "slide 2",
            projects: [
                {
                    id: 125,
                    title: "Avasta Tartut",
                    subtext: "Aasta tegija võistlus 2023. 1.koht UX/UI disainerite kutsevõistlustel.",
                    image: "wordpress.png",
                },
                {
                    id: 126,
                    title: "UX/UI disaini portfoolio",
                    subtext: "UX/UI disaineri erialal (Tartu Rakenduslik Kolledž) õpingute raames loodud portfoolio",
                    image: "frillice_äpp.png",
                }
            ]
        },
        {
            id: 3,
            slide: "slide 3",
            projects: [
                {
                    id: 523,
                    title: "UX/UI disaini portfoolio",
                    subtext: "UX/UI disaineri erialal (Tartu Rakenduslik Kolledž) õpingute raames loodud portfoolio",
                    image: "frillice_veebirakendus.png",
                },
                {
                    id: 323,
                    title: "UX/UI disaini portfoolio",
                    subtext: "UX/UI disaineri erialal (Tartu Rakenduslik Kolledž) õpingute raames loodud portfoolio",
                    image: "frillice_screenid.png",
                }
            ]
        }
    ]


    const [currentSlide, setCurrentSlide] = useState(0);
    

    
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
      };
    
      const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      };



  return (
    <>
        <div className="carousel__head">
            <h2 className="carousel__head--heading">Projektid</h2>
            <div className="arrow__btns">
                <button onClick={handlePrevSlide} aria-label="left arrow" class="arrow__btn arrow__btn--left">
                    <svg class="arrow__btn--icon">
                        <use xlinkHref={`../../icons.svg#icon-keyboard_arrow_left`}></use>
                    </svg>
                </button>
                <button onClick={handleNextSlide} aria-label="right arrow"  class="arrow__btn arrow__btn--right">
                    <svg class="arrow__btn--icon">
                        <use xlinkHref={`../..//icons.svg#icon-keyboard_arrow_right`}></use>
                    </svg>
                </button>
            </div>
        </div>
        
        <div className="carousel">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`carousel__slide  ${index === currentSlide ? 'active' : ''}`}
                    style={{ transform: `translateX(${100 * (index - currentSlide)}%` }}
                >
                    <Slide key={slide.id} slide={slide} />
                </div>
            ))}
        </div>
    </>
    
  )
}

export default Carousel
