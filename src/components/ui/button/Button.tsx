import { FC } from "react";

import { IButton } from "./types";
import cl from "./button.module.scss";
import { useButtonClick } from "./hook";

export const Button: FC<IButton> = (props) => {
    const { uiType, children, onClick, className } = props;

    const { customClick } = useButtonClick(uiType);

    const handleClick = () => {
        onClick && onClick();
        customClick && customClick();
    };

    return (
        <button
            className={`${cl.button_root} ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
