import { FC, MouseEvent, MouseEventHandler, ReactComponentElement, ReactElement } from "react";

export interface INavItem {
    exact?: boolean;
    link?: string;
    hash?: string;
    type: string;
    active?: boolean;
    clicked?: MouseEventHandler<HTMLAnchorElement>;
    listChildren?: ReactElement;
    customClasses?: string;
    customLinkClasses?: string;
    customActiveNavLink?: boolean;
}



// Common types for navItems

export interface INavItemsElements {
    title?: string;
    link: string;
    id: number;
    type: INavItemsType;
    exact?: boolean;
    event?: any;
    icon?: ReactElement<any, any> | null;
}

export enum INavItemsType {
    navLink = "navLink",
    contactLink = "contactLink",
}