import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  ResponseType: "json"
});

export const apiMiddleware = store => next => action => {
  API.interceptors.request.use(
    config => {
      // Do something before request is sent(exemple check access token on localStorage)
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  API.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  //call the next action
  next(action);
};