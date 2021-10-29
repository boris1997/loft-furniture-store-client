import { FC, useEffect } from "react";
import SliderClasses from "./Carousel.module.scss";
import SliderSetup from "../../../hoc/SliderSetup";

import { useState } from "react";
import Bullets from "../Bullets/Bullets";
import { SliderType } from "globalTypes";
import ImgToggler from "../SliderTogglers/ImgTogglers/ImgToggler/ImgToggler";
import Slide from "../Slide/Slide";
import { IImgTogglers } from "../Types/types";
import ImgTogglers from "components/Slider/SliderTogglers/ImgTogglers/ImgTogglers";
// import sliderSetup from 'hoc/siderSetup'

const Carousel: FC<SliderType> = ({ sliderSettings }) => {
  const { togglers } = sliderSettings;
  const { imgs, bullet, arrows }: any = togglers;
  //    imgs,bullet, arrows can be assgnable to any because we define all type in
  //  slider settings before passing them to carousel and also some of the togllers can have type of undefined

  const [transform, setTransfrom] = useState(0);

  const setImgtranslation = (index: number) => {
    setTransfrom((prev) => {
      return index * 100;
    });
  };

  let imgUi;
  if (imgs) {
    imgUi = imgs.ui.map((togglerImg: IImgTogglers, i: number) => (
      <ImgToggler
        clicked={() => setImgtranslation(i)}
        key={i}
        togglerImg={togglerImg}
      />
    ));
  }
  //

  return (
    <>
      <div className={SliderClasses.slider}>
        <Slide transform={transform} />
        {/* {slidesUi.map(slide => slide)} */}
      </div>
      {bullet && <Bullets type={bullet.type}></Bullets>}
      <ImgTogglers>{imgUi}</ImgTogglers>
      {/*    <div className={SliderClasses.slider}>
                {togglersUi}
                {children}
            </div> */}
    </>
  );
};

export default SliderSetup(Carousel);
