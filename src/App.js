import './App.css';
import useGeolocation from './hooks/useGeolocation';

function App() {
  const geolocation = useGeolocation();

  return (
    <div className='App'>
      {
        geolocation.waiting ? (
          <p>geolocation is waiting</p>
        ) : geolocation.error ? (
          <p>Error with getting geolocation</p>
        ) : (
          <p>
            latitude: { geolocation.latitude }
            longitude: { geolocation.longtitute }
          </p>
        )
      }
    </div>
  );
}

export default App;
