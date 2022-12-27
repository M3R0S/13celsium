import { FC } from "react";
import Image from "next/image";

import { ILogo } from "./types";
import { IMG_LOGO } from "./const";
import cl from "./logo.module.scss";

export const Logo: FC<ILogo> = (props) => {
    const { uiType, height, width = 50, onClick, className } = props;

    return (
        <Image
            className={`${cl.logo} ${className}`}
            src={IMG_LOGO[uiType]}
            height={height}
            width={width}
            alt="Логотип"
            priority={true}
            onClick={onClick}
        />
    );
};
