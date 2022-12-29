import { FC } from "react";

import cl from "./navbar.module.scss";
import { Logo, Wrapper } from "components/ui";
import { NavbarMenu } from "./menu/NavbarMenu";

export const Navbar: FC = () => {
    return (
        <header className={cl.header}>
            <Wrapper uiType="navbarAndFooter">
                <Logo uiType={"mini"} />
                <NavbarMenu />
            </Wrapper>
        </header>
    );
};
