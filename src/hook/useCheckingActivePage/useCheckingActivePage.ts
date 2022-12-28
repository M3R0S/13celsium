import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useCheckingActivePage = () => {
    const [activePage, setActivePage] = useState<string>();
    const router = useRouter();

    useEffect(() => {
        setActivePage(router.pathname);
    }, [router.pathname]);

    const onSetActivePage = () => {
        setActivePage(router.pathname);
    };

    return { activePage, onSetActivePage };
};
