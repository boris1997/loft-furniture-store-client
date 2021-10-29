import { SliderSettings } from "components/Slider/Types/types";
import { FC, MouseEventHandler, ReactChild, ReactNode } from "react";

export type RouterType = {
  match: {
    params: {
      urlName: boolean;
      name: boolean;
    };
  };
};




export interface IButton {
  type: ButtonTypes;
  customClass?: string;
  disabled?: boolean;
  size?: ButtonSizes;
  clicked?: any;
}

export enum ButtonTypes {
  main = 'main',
  secondary = 'secondary'
}
export enum ButtonSizes {
  fullWidth = 'full-width',
  main = "main"
}

export interface ChildrenType {
  children: ReactChild | ReactNode;
}

/* export interface ClickEvent {
  clicked: MouseEventHandler;
} */

export interface SliderType {
  sliderSettings: SliderSettings;
}

export interface SlideType {
  transform: number;
}

// export interface Ca
