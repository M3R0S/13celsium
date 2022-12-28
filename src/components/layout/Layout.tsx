import { Navbar } from "./navbar/Navbar";
import { FC } from "react";

import cl from "./layout.module.scss";
import { ILayout } from "./types";
import { Footer } from "./footer/Footer";

export const Layout: FC<ILayout> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className={cl.main}>{children}</main>
            <Footer />
        </>
    );
};
