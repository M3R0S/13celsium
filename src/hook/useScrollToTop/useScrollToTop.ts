import { animateScroll } from "react-scroll";

export const useScrollToTop = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
        console.log("скролл");
    };

    return { scrollToTop };
};
