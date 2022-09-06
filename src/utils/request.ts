import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {$Request, $Urls} from '../constants';

export const request = (config: AxiosRequestConfig) => {
  axios.defaults.baseURL = $Urls.base;

  config.headers = {
    ...$Request.rapidApiHeaders,
    ...config.headers,
  };

  return axios(config);
};
