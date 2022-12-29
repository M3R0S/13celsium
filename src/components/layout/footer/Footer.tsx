import { FC } from "react";

import cl from "./footer.module.scss";
import { Logo, Wrapper } from "components/ui";


export const Footer: FC = () => {
    return (
        <footer className={cl.footer}>
            <Wrapper uiType="navbarAndFooter">
                <Logo uiType="mini" />
            </Wrapper>
        </footer>
    );
};
