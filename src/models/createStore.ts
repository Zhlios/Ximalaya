import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import {RootState} from './index';
import {HorseModel} from '@/realmModel/horseModel';
import RealmAction from '@/realmModel/realmAction';

interface CreateHorseState {
  data: HorseModel;
}

interface CreateHorseModel extends Model {
  namespace: 'createHorse';
  state: CreateHorseState;
  reducers: {
    setState: Reducer<CreateHorseState>;
  };
  effects: {
    createHorse: Effect;
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
          data: data,
        },
      });
    },
    *createHorse({params}, {call, put}) {
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
      console.log('xu改了');
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default createHorse;
