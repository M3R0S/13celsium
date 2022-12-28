import { Button, Logo } from "components/ui";
import { FC } from "react";

import cl from "./footer.module.scss";

export const Footer: FC = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.wrapper}>
                <Logo uiType="mini" />
            </div>
        </footer>
    );
};
