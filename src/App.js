import { useState, useEffect } from 'react';

import './App.css';

import Weather from './components/Weather';

import useGeolocation from './hooks/useGeolocation';

import { fetchCurrentWeather } from './services/api';

function App() {
  const geolocation = useGeolocation();
  
  const [weather, setWeather] = useState({ loading: false, error: null });
  const setWeatherLoading = (loading) => {
    setWeather((prevWeather) => ({ ...prevWeather, loading }));
  }
  const setWeatherError = (error) => {
    setWeather((prevWeather) => ({ ...prevWeather, error }));
  }
  const setWeatherData = (data) => {
    setWeather((prevWeather) => ({ ...prevWeather, ...data }));
  }

  useEffect(() => {
    if (geolocation.latitude && geolocation.longtitute) {
      setWeatherLoading(true);
      fetchCurrentWeather({ lat: geolocation.latitude, lon: geolocation.longtitute })
        .then(({ data }) => setWeatherData(data))
        .catch((error) => setWeatherError(error))
        .finally(() => setWeatherLoading(false));
    }
  }, [geolocation]);

  return (
    <div className='App'>
      {
        geolocation.waiting ? (
          <p>geolocation is waiting</p>
        ) : geolocation.error ? (
          <p>Error with getting geolocation</p>
        ) : weather.loading ? (
          <p>weather is loading</p>
        ) : weather.error ? (
          <p>Error with fetching weather</p>
        ) : (
          <Weather temp={weather.main.temp} />
        )
      }
    </div>
  );
}

export default App;
