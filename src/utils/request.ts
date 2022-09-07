import axios, {AxiosRequestConfig} from 'axios';
import {$Request, $Urls} from 'consts';

export const request = (config: AxiosRequestConfig) => {
  axios.defaults.baseURL = $Urls.base;

  config.headers = {
    ...$Request.rapidApiHeaders,
    ...config.headers,
  };

  return axios(config);
};
