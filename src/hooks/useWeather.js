import { useState, useEffect } from "react";

import { fetchCurrentWeather } from "../services/api";

const useWeather = (geolocation, lang) => {
    const [weather, setWeather] = useState({
        loading: false,
        error: null
    });

    const setWeatherLoading = (loading) => {
        setWeather((prevWeather) => ({
            ...prevWeather,
            loading
        }));
    }

    const setWeatherError = () => {
        setWeather((prevWeather) => ({
            ...prevWeather,
            error: 'Ой что-то пошло не так, попробуйте позже'
        }))
    }

    const setWeatherData = (data) => {
        setWeather((prevWeather) => ({
            ...prevWeather,
            ...data
        }))
    }

    useEffect(() => {
        (
            async () => {
                if (geolocation.latitude && geolocation.longtitute) {
                    setWeatherLoading(true);
                    try {
                        const { data } = await fetchCurrentWeather({
                            lat: geolocation.latitude,
                            lon: geolocation.longtitute,
                            lang,
                        });

                        setWeatherData(data);
                    } catch (error) {
                        setWeatherError(error);
                    }
                    setWeatherLoading(false);
                }
            }
        )()
    }, [geolocation, lang]);

    return weather;
}

export default useWeather;