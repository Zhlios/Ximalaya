import Realm from 'realm';
import Horse from '@/realmModel/horseModel';
const realm = new Realm({schema: [Horse.scheme]});

export default realm;
