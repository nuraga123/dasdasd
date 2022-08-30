import HttpClient from "./HttpClient";

// TODO: set api id to env
const httpClient = new HttpClient('http://api.openweathermap.org/data/2.5', '47189df485c69471f637de5e11e68e54');

export function fetchCurrentWeather({ lat, lon, lang }) {
    return httpClient.request({
        method: 'get',
        url: '/weather',
        params: { lat, lon, lang, units: 'metric' }
    });
}

export function fetchCurrentForecast({ lat, lon }) {
    return httpClient.request({
        method: 'get',
        url: '/forecast',
        params: { lat, lon, units: 'metric' }
    })
}
//'56aa4c82084e1cc2915dd716d9a52da9' старый ключ