import axios from 'axios';
import store from '../store/store';

const onSuccess = (response) => {
  store.dispatch('loader/setLoading', false);
  return response;
}

const onError = (error) => {

  store.dispatch('loader/setLoading', false);
  return Promise.reject(error); 
}

const beforeRequestSuccess = (config) => {
  store.dispatch('loader/setLoading', true);
  return config;
}

const beforeRequestError = (error) => {
  store.dispatch('loader/setLoading', false);
  return Promise.reject(error);
}

export { onSuccess, onError, beforeRequestSuccess, beforeRequestError };