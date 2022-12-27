import { FC } from "react";
import Image from "next/image";

import cl from "./navbar.module.scss";
import { Button, Logo } from "components/ui";
import { useChangeBooleanValue, useScrollToTop } from "hook";
import { burger } from "./const";
import { NavbarMenu } from "./menu/NavbarMenu";

export const Navbar = () => {
    const { scrollToTop } = useScrollToTop();
    const [isOpenedMenu, setIsOpenedMenu] = useChangeBooleanValue();

    return (
        <header className={cl.header}>
            <div className={cl.wrapper}>
                <Button uiType="logo" onClick={scrollToTop}>
                    <Logo uiType={"mini"} width={45} />
                </Button>
                <Button uiType="navbarMenu" onClick={setIsOpenedMenu}>
                    <Image src={burger} width={40} alt="Меню" priority />
                </Button>
                {isOpenedMenu && <NavbarMenu />}
            </div>
        </header>
    );
};
