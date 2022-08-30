import { useState, useEffect } from "react";

import { fetchCurrentForecast } from "../services/api";

const useForecast = (geolocation) => {
  const [forecast, setForecast] = useState({
    loading: false,
    error: null
  });

  const setForecastLoading = (loading) => {
    setForecast((prevForecast) => ({
      ...prevForecast,
      loading
    }));
  }

  const setForecastError = () => {
    setForecast((prevForecast) => ({
      ...prevForecast,
      error: '4 дня не работают, попробуйте позже'
    }))
  }

  const setForecastData = (data) => {
    setForecast((prevForecast) => ({
      ...prevForecast,
      ...data
    }))
  }

  useEffect(() => {
    (async () => {
      if (geolocation.latitude && geolocation.longtitute) {
        setForecastLoading(true);

        try {
          const { data } = await fetchCurrentForecast({
            lat: geolocation.latitude,
            lon: geolocation.longtitute,
          });
          setForecastData(data);
        } catch (error) {
          setForecastError(error);
        }

        setForecastLoading(false);
      }
    })()
  }, [geolocation]);

  return forecast;
}

export default useForecast;