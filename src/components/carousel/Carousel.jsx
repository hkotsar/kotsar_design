import React, { useState, useContext } from 'react';
import './carousel.scss';
import Slide from './Slide';
import ProjectsContext from '../../context/projects';



function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = useContext(ProjectsContext)

   

    
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.slides.length - 1 : prevSlide - 1));

         
      };
    
      const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === data.slides.length - 1 ? 0 : prevSlide + 1));

      
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
            {data.slides.map((slide, index) => (
                
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
