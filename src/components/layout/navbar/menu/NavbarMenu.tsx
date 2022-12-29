import { FC, useState } from "react";
import Image from "next/image";

import cl from "./navbarMenu.module.scss";
import { Button, Wrapper } from "components/ui";
import { NavbarMenuList } from "./list/NavbarMenuList";
import { NAVBAR_MENU } from "./const";
import { useDelayUnmounting } from "hook";
import { changeClassName, IChangeClassName } from "utils";

export const NavbarMenu: FC = () => {
    const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
    const { isMounted, delayUnmounting } = useDelayUnmounting(
        isOpenedMenu,
        setIsOpenedMenu,
        500
    );

    const params: IChangeClassName = {
        defaultClass: cl.menu,
        interactiveClass: { start: cl.menu_enabled, end: cl.menu_disabled },
        trigger: isOpenedMenu,
    };

    return (
        <Wrapper uiType="navbarMenu">
            {isMounted && <NavbarMenuList isOpened={isOpenedMenu} />}
            <Button
                className={changeClassName(params)}
                uiType="navbarMenu"
                onClick={delayUnmounting}
            >
                <Image src={NAVBAR_MENU} width={40} alt="Меню" priority />
            </Button>
        </Wrapper>
    );
};
