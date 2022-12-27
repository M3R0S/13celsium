import { StaticImageData } from "next/image";

export interface ILogo {
    uiType: TLogo;
    width?: number;
    height?: number;
    onClick?: () => void
    className?: string
}

type TLogo = "mini" | "big";

export interface TIMG_LOGO {
    mini: StaticImageData,
    big: StaticImageData,
}

