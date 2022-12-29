import { FC } from "react";
import Link from "next/link";

import cl from "./navbarMenuList.module.scss";
import { NAV_LINKS } from "./const";
import { useCheckingActivePage } from "hook";
import { INavbarMenuList } from "./types";
import { changeClassName, IChangeClassName } from "utils";

export const NavbarMenuList: FC<INavbarMenuList> = ({ isOpened }) => {
    const { activePage, onSetActivePage } = useCheckingActivePage();

    const paramsNav: IChangeClassName = {
        defaultClass: cl.nav,
        interactiveClass: {
            start: cl.nav_enabled,
            end: cl.nav_disabled,
        },
        trigger: isOpened,
    };

    const changeClassNameLink = (href: string): string => {
        const trigger = activePage === href

        const params: IChangeClassName = {
            defaultClass: cl.link,
            interactiveClass: {
                start: cl.link_active,
                end: cl.link_inactive,
            }, 
            trigger,
        }
        return changeClassName(params)
    };

    return (
        <nav className={changeClassName(paramsNav)}>
            {NAV_LINKS.map(({ id, title, href }) => (
                <Link
                    className={changeClassNameLink(href)}
                    href={href}
                    key={id}
                    onClick={onSetActivePage}
                >
                    {title}
                </Link>
            ))}
        </nav>
    );
};
