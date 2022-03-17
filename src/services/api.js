import HttpClient from "./HttpClient";

// TODO: set api id to env
const httpClient = new HttpClient('http://api.openweathermap.org/data/2.5/weather', '4adfc25fabd06b38976297ed437df10a');

export function fetchCurrentWeather({ lat, lon }) {
    return httpClient.request({
        method: 'get',
        params: { lat, lon, units: 'metric' }
    });
}
