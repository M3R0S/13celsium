import { FC } from "react";

import cl from "./navbar.module.scss";
import { Button, Logo } from "components/ui";
import { useScrollToTop } from "hook";
import { NavbarMenu } from "./menu/NavbarMenu";

export const Navbar: FC = () => {
    return (
        <header className={cl.header}>
            <div className={cl.wrapper}>
                <Logo uiType={"mini"} />
                <NavbarMenu />
            </div>
        </header>
    );
};
