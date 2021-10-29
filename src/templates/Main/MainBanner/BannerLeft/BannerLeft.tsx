import Button from "components/Button/Button";
import React, { FC } from "react";
import defaultBtnClasses from "components/button/button.module.scss";
import bannerLeftClasses from "./BannerLeft.module.scss";
import { ButtonSizes, ButtonTypes } from "globalTypes";

interface IBannerLeft {
  title: string;
  text: string;
  callToAction: string;
}

const BannerLeft: FC<IBannerLeft> = ({ title, text, callToAction }) => {
  const redirect = () => {};
  return (
    <div className={bannerLeftClasses.bannerLeft}>
      <h1>{title}</h1>
      <p>{text}</p>
      <Button
        clicked={redirect}
        size={ButtonSizes.main}
        type={ButtonTypes.secondary}
      >
        {callToAction}
      </Button>
    </div>
  );
};

export default BannerLeft;
