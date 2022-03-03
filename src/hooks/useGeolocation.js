import { useState, useEffect } from "react";

const useGeolocation = () => {
    const [coordinates, setCoordinates] = useState({
        latitude: null,
        longtitute: null,
        error: null,
        waiting: true,
    });

    useEffect(() => {
        const successCallback = (position) => {
            setCoordinates({
                waiting: false,
                latitude: position.coords.latitude,
                longtitute: position.coords.longitude,
            });
        }

        const errorCallback = (error) => {
            setCoordinates({
                waiting: false,
                error,
            });
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            setCoordinates({
                waiting: false,
                error: { message: 'Your browser does not support geolocation' }
            });
        }
    }, []);

    return coordinates;
};

export default useGeolocation;
