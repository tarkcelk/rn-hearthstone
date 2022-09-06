import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {$Request, $Urls} from '../constants';

export const request = (config: AxiosRequestConfig) => {
  axios.defaults.baseURL = $Urls.base;
  axios.defaults.withCredentials = true;
  axios.interceptors.response.use(onFulfilled, onRejected);
  config.headers = {
    ...$Request.RapidApiHeaders,
    ...config.headers,
  };

  return axios(config);
};

const onFulfilled = (response: AxiosResponse) => Promise.resolve(response);

const onRejected = (error: AxiosError) => Promise.reject(error);
