import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
    const [dimensions, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleWindowResize = () => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []); //remember about dependencies, as a second argument
    //cuz there is no dependencies, the function is running in circle. We can track window size values in present

    return dimensions;
};
