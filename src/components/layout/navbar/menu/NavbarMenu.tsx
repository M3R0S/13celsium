import { FC, useState } from "react";
import Image from "next/image";

import cl from "./navbarMenu.module.scss";
import { Button } from "components/ui";
import { NavbarMenuList } from "./list/NavbarMenuList";
import { NAVBAR_MENU } from "./const";
import { useDelayUnmounting } from "hook";

export const NavbarMenu: FC = () => {
    const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
    const { isMounted, delayUnmounting } = useDelayUnmounting(
        isOpenedMenu,
        setIsOpenedMenu,
        500
    );

    const changeClassNameMenu = (): string => {
        if (isOpenedMenu) {
            return `${cl.menu} ${cl.menu_enabled}`;
        } else {
            return `${cl.menu} ${cl.menu_disabled}`;
        }
    };

    return (
        <div className={cl.wrapper}>
            {isMounted && <NavbarMenuList isOpened={isOpenedMenu} />}
            <Button
                className={changeClassNameMenu()}
                uiType="navbarMenu"
                onClick={delayUnmounting}
            >
                <Image src={NAVBAR_MENU} width={40} alt="Меню" priority />
            </Button>
        </div>
    );
};
