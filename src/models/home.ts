import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import {getCarousel, getChannel, getGuess} from '@/api/index';
import {RootState} from '.';

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface IGuess {
  id: string;
  image: string;
  title: string;
}

export interface IChannel {
  id: string;
  image: string;
  title: string;
  remark: string;
  played: number;
  playing: number;
}

export interface IPagination {
  current: number;
  total: number;
  hasMore: boolean;
}

interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
  channels: IChannel[];
  pagination: IPagination;
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuess: Effect;
    fetchChannel: Effect;
  };
}

const initialState: HomeState = {
  carousels: [],
  guess: [],
  channels: [],
  pagination: {
    current: 1,
    total: 0,
    hasMore: true,
  },
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  effects: {
    *fetchCarousels({params}, {call, put}) {
      const {data} = yield call(getCarousel, params);
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
    *fetchGuess({params}, {call, put}) {
      const {data} = yield call(getGuess, params);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
    *fetchChannel({params, callback, payload}, {call, put, select}) {
      const {channels, pagination} = yield select(
        (state: RootState) => state.home,
      );
      console.log(pagination);
      let page = 1;
      if (payload && payload.loadMore) {
        page = pagination.current + 1;
      }
      params.page = page;
      console.log(params);
      const {data} = yield call(getChannel, params);
      let newChannels = data.results;
      if (payload && payload.loadMore) {
        newChannels = channels.concat(newChannels);
      }
      yield put({
        type: 'setState',
        payload: {
          channels: newChannels,
          pagination: {
            total: data.pagination.total,
            current: page,
            hasMore: newChannels.length < data.pagination.total,
          },
        },
      });
      if (typeof callback === 'function') {
        callback();
      }
    },
  },

  reducers: {
    setState(state = initialState, {payload}) {
      console.log(payload, 'payload');
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default homeModel;
