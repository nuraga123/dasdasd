import axios from 'axios';

export default class HttpClient {   
    constructor(baseURL, appid) {
        this.client = axios.create({ baseURL });

        this.client.interceptors.request.use(
            (config) => {
                const params = { appid };

                return { ...config, params: { ...config.params, ...params } };
            }
        );
    }

    request({ method, params }) {
        return this.client({ method, params });
    }
}
