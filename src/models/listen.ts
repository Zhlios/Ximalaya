import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import {RootState} from './index';
import {HorseModel} from '@/realmModel/horseModel';
import realmAction from '@/realmModel/realmAction';
import RealmAction from '@/realmModel/realmAction';

interface ListenState {
  horseList: HorseModel[];
}

interface ListenModel extends Model {
  namespace: 'listen';
  state: ListenState;
  reducers: {
    setState: Reducer<ListenState>;
  };
  effects: {
    fetchHorseList: Effect;
  };
}

const initialState: ListenState = {
  horseList: [],
};

const listen: ListenModel = {
  namespace: 'listen',
  state: initialState,
  effects: {
    *fetchHorseList({params}, {call, put}) {
      console.log('hha');
      const data = RealmAction.getAllHorse();
      console.log(data);
      yield put({
        type: 'setState',
        payload: {
          horseList: data,
        },
      });
    },
  },
  reducers: {
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default listen;
