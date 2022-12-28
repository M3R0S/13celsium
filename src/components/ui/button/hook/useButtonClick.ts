import { useScrollToTop } from "hook";
import { IAccordanceUiType, TButton } from "../types";

export const useButtonClick = (uiType: TButton) => {
    const { scrollToTop } = useScrollToTop();

    const handleLogo = () => {
        scrollToTop();
    };

    const accordanceUiType: IAccordanceUiType = {
        logo: handleLogo,
    };

    const customClick = accordanceUiType[uiType]

    return { customClick };
};
