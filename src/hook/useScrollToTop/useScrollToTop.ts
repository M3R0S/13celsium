import { animateScroll } from "react-scroll";

export const useScrollToTop = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    return { scrollToTop };
};
