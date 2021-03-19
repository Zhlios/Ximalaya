import Realm from 'realm';

import HorseModel from '@/realmModel/horseModel';

const realm = new Realm({path: 'hos', schema: [HorseModel.scheme]});

export default realm;
