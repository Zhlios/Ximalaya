import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create();

instance.defaults.baseURL = Config.BASE_URL;

instance.interceptors.request.use(
  (config) => {
    config.headers['icode'] = '46A5BD494319A8DA';
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
