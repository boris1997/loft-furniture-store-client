import React from "react";
import BannerLeft from "./BannerLeft/BannerLeft";
import MainBannerClasses from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <div className={MainBannerClasses.MainBanner}>
      <BannerLeft
        title={"loft мебель"}
        text={"Современная и удобная мебель в Москве"}
        callToAction={"Узнать О нас"}
      />
    </div>
  );
};

export default MainBanner;
