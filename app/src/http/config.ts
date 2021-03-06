import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

import {LocalStorageService} from "../services/localStorageService";

const BASE_URL: string = "https://demo-api.it-shatle.by/";

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {},
};

const api: AxiosInstance = axios.create(config);

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = LocalStorageService.getUserToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const { config, data } = response;

    const { url } = config;

    if (url === "auth/signIn") {
      LocalStorageService.saveUserToken(data.accessToken);
    }
    return response;
  },
  (err: AxiosError) => {
    console.log(err);

    throw err;
  }
);

export default api;
