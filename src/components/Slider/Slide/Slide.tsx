import React, { FC, useContext } from "react";
import SliderClasses from "../Carousel/Carousel.module.scss";
import { /* CarouselType, */ SlideType } from "globalTypes";
import { SliderContext } from "../Context/SliderContext";

const Slide: FC<SlideType> = ({ transform }) => {
  // const classes = [SliderClasses.slider__showOneSlide, SliderClasses.slider__showTwoSlides, SliderClasses.slider__showThreeSlides, SliderClasses.slider__showFourSlides]
  //
  //    = Object.entries(SliderClasses).find(SliderClass => SliderClass[0].split('__')[1] === showSlides)
  // let slideAmouontClass = classes.find(slideType => slideType.split('__')[1] === showSlides)
  //
  // slide.map(slide =>

  const slidesUi = useContext(SliderContext);
  return (
    <div
      style={{ transform: `translateX(-${transform + "%"})` }}
      className={SliderClasses.wrapper}
    >
      {slidesUi}
    </div>
  );
};

export default Slide;
