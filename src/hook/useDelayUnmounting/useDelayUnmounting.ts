import { Dispatch, SetStateAction, useState } from "react";

export const useDelayUnmounting = (initialValue: boolean, trigger: Dispatch<SetStateAction<boolean>> , timeout: number) => {
    const [isMounted, setIsMounted] = useState<boolean>(initialValue);

    const delayUnmounting = () => {
        if (isMounted) {
            setTimeout(() => {
                setIsMounted(false);
            }, timeout);
        } else {
            setIsMounted(true);
        }
        trigger(!initialValue)
    };

    return { isMounted, delayUnmounting };
};
