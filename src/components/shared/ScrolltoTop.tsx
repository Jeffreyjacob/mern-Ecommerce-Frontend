import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolltoTop = ({ children }:{children:React.ReactNode}) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); // This will run whenever the location changes

    return (
        <div>
            {/* Your layout content, like header, footer, etc. */}
            {children}
        </div>
    );
};

export default ScrolltoTop