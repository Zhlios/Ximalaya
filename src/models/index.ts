import homeModel from '@/models/home';
import home from '@/models/home';
import listen from '@/models/listen';
import createHorse from '@/models/createStore';
import {DvaLoadingState} from 'dva-loading-ts';

const models = [home, listen, createHorse];

export type RootState = {
  home: typeof home.state;
  listen: typeof listen.state;
  createHorse: typeof createHorse.state;
  loading: DvaLoadingState;
};

export default models;
