import { SliderType } from "globalTypes";
import { MouseEventHandler, ReactNode } from "react";

export interface SliderSettings {
  togglers: ImgTogglers | BulletTogglers | ArrowTogglers;

  //   arrows: ArrowType;
}
// type SliderTogglers = BulletTogglers | ArrowTypeVariant;

export interface BulletTogglers {
  bullet: BulletTogglersSettings;
}

export interface ImgTogglers {
  imgs: ImgTogglersSettings;
}
export interface ArrowTogglers {
  arrows: ArrowTogglersSettings;
}

export interface ArrowTogglersSettings {
  type: ArrowTypeVariant;
}
export interface BulletTogglersSettings {
  type: BulletType;
}
export interface ImgTogglersSettings {
  ui: Array<IImgTogglers>;
}

export enum BulletType {
  rounded = "rounded",
  flat = "flat",
  squre = "squre",
  custom = "custom",
}

export enum ArrowTypeVariant {
  insideCircle = "insideCircle",
  clean = "clean",
}

export interface IImgTogglers {
  slideImg?: ReactNode;
  smallImg?: ReactNode;
  togglerImg?: ReactNode;
  clicked?: MouseEventHandler<HTMLDivElement>;
}
