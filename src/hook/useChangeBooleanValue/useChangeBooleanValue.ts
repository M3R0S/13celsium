import { useState } from "react";

export const useChangeBooleanValue = () : [boolean, () => void] => {
    const [booleanValue, setBooleanValue] = useState<boolean>(false);

    const changeBooleanValue = () => {
        setBooleanValue(!booleanValue);
    };

    return [booleanValue, changeBooleanValue];
};
