import homeModel from '@/models/home';
import home from '@/models/home';
import listen from '@/models/listen';
import {DvaLoadingState} from 'dva-loading-ts';

const models = [home, listen];

export type RootState = {
  home: typeof home.state;
  listen: typeof listen.state;
  loading: DvaLoadingState;
};

export default models;
