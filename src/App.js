import { observer } from 'mobx-react';

import './App.css';

import Weather from './components/Weather';

import useGeolocation from './hooks/useGeolocation';
import useWeather from './hooks/useWeather';
import useForecast from './hooks/useForecast';

import { languageStore } from './store';


function App() {
  const geolocation = useGeolocation();

  const weather = useWeather(
    geolocation,
    languageStore.value
  );

  const forecast = useForecast(
    geolocation
  );
  
    console.log(forecast)

  return (
    <div className='App'>
      <div>
        <Weather
          //weather={weather}
          // forecast={forecast}
          country={weather.sys?.country}
          location={weather.name}
          temp={weather.main?.temp}
          iconId={weather.weather?.[0]?.icon}
          loading={geolocation.waiting || weather.loading || forecast.loading}
          error={geolocation.error || weather.error || forecast.error}
          speed={weather.wind?.speed}
          humidity={weather.main?.humidity}
          information={weather.weather?.[0]?.description}
          //tempForecast={forecastTemp}
          //dateForecast={forecastDate}
        />
      </div>
    </div>
  );
}

export default observer(App);