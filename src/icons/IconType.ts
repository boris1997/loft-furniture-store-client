import { MouseEventHandler } from "react";

export interface IIcon {
    fill?: string;
    IconClasses?: string;
}


export interface IIconEvent extends IIcon {
    clicked?: MouseEventHandler;
}