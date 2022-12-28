import { FC } from "react";
import Link from "next/link";

import cl from "./navbarMenuList.module.scss";
import { NAV_LINKS } from "./const";
import { useCheckingActivePage } from "hook";
import { INavbarMenuList } from "./types";

export const NavbarMenuList: FC<INavbarMenuList> = ({ isOpened }) => {
    const { activePage, onSetActivePage } = useCheckingActivePage();

    const changeClassNameNav = (): string => {
        if (isOpened) {
            return `${cl.nav} ${cl.nav_enabled}`;
        } else {
            return `${cl.nav} ${cl.nav_disabled}`;
        }
    };

    const changeClassNameLink = (href: string): string => {
        if (activePage === href) {
            return `${cl.link} ${cl.link_active}`;
        } else {
            return `${cl.link} ${cl.link_inactive}`;
        }
    };

    return (
        <nav className={changeClassNameNav()}>
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
