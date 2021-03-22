import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import {RootState} from './index';
import {HorseModel} from '@/realmModel/horseModel';
import RealmAction from '@/realmModel/realmAction';

interface CreateHorseState {
  data: HorseModel;
  alertMsg: string;
}

interface CreateHorseModel extends Model {
  namespace: 'createHorse';
  state: CreateHorseState;
  reducers: {
    setState: Reducer<CreateHorseState>;
  };
  effects: {
    saveHorse: Effect;
    changeValue: Effect;
  };
}

const initialState: CreateHorseState = {
  data: {
    trainer: '',
    _id: 0,
    horseName: '',
    run: '',
    jockey: '',
    weight: 0,
    priority: '',
    draw: 0,
    Rtg: '',
    Rtg_Add: '',
    gear: '',
  },
  alertMsg: '',
};

const createHorse: CreateHorseModel = {
  namespace: 'createHorse',
  state: initialState,
  effects: {
    *changeValue({params}, {call, put, select}) {
      console.log('hhahaha');
      const data = yield select((state: RootState) => state.createHorse.data);
      data[params.key] = params.text;
      console.log(params.key, params.text, data);
      yield put({
        type: 'setState',
        payload: {
          data: {...data},
        },
      });
    },
    *saveHorse({params, callback}, {call, put, select}) {
      const data = yield select((state: RootState) => state.createHorse.data);
      for (const value in data) {
        if (data[value].length < 1) {
          console.log('数据为空');
          yield put({
            type: 'setState',
            payload: {
              alertMsg: `${value}数据不能为空`,
            },
          });
          return;
        }
      }

      yield put({
        type: 'setState',
        payload: {
          alertMsg: ``,
        },
      });
      RealmAction.addHorse(data);

      yield put({type: 'listen/fetchHorseList', payload: {}});

      if (callback && typeof callback === 'function') {
        callback();
      }
    },
  },
  reducers: {
    setState(state = initialState, {payload}) {
      console.log('xu改了');
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default createHorse;
