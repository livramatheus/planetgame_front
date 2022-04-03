import { useState, useEffect } from "react";

function useResponsive() {

    const mobileBreakpoint   = 1080;
    const handleResizeWindow = () => setScrWidth(window.innerWidth);

    const [scrWidth, setScrWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResizeWindow);
        return () => window.removeEventListener("resize", handleResizeWindow)
    }, []);

    return mobileBreakpoint > scrWidth;
}

export default useResponsive;