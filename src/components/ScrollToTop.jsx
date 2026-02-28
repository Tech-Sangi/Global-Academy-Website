import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change OR on initial load/refresh
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    // Additional listener to force scroll top on beforeunload/load if browsers try to restore history position
    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    }, []);

    return null;
};

export default ScrollToTop;
