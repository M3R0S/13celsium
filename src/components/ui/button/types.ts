import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButton {
    uiType: TButton;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export type TButton = "logo" | "navbarMenu";

export interface IAccordanceUiType {
    logo?: () => void;
    navbarMenu?: () => void;
}
