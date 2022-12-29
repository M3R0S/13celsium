import { IChangeClassName } from "./types";

export const changeClassName = (params: IChangeClassName): string => {
    const {
        defaultClass,
        interactiveClass,
        trigger,
        isLoading = false,
    } = params;
    const { start, end, loading = false } = interactiveClass;

    let additionalClass;

    if (trigger) {
        additionalClass = start;
    }
    if (isLoading) {
        additionalClass = loading;
    }
    if (!trigger) {
        additionalClass = end;
    }

    const finalClass = `${defaultClass} ${additionalClass}`;

    return finalClass;
};
