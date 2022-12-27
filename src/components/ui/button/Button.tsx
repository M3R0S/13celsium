import { FC } from "react";

import { IButton } from "./types";
import cl from "button.module.scss";

export const Button: FC<IButton> = (props) => {
    const { children } = props;

    return (
        <button {...props}>
            {children}
        </button>
    );
};
