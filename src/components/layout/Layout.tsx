import { FC } from "react";

import { ILayout } from "./types";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Main } from "./main/Main";

export const Layout: FC<ILayout> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
