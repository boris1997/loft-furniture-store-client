import { MouseEventHandler } from "react";

export interface IBackdrop {
    showBackdrop: boolean;
    clicked: MouseEventHandler<HTMLDivElement>;
}