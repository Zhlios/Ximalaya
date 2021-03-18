import homeModel from '@/models/home';
import home from '@/models/home';
import {DvaLoadingState} from 'dva-loading-ts';

const models = [home];

export type RootState = {
  home: typeof home.state;
  loading: DvaLoadingState;
};

export default models;
