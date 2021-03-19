import realm from '@/realmModel/index';
import {HorseModel} from '@/realmModel/horseModel';
import Horse from '@/realmModel/horseModel';
interface realmActionModel {
  getAllHorse(): any;
  addHorse(d: HorseModel): any;
}
const RealmAction: realmActionModel = {
  getAllHorse() {
    const data = realm.objects(Horse.schemeName);
    return data;
  },
  addHorse(d: HorseModel) {
    return new Promise((resolve, reject) => {
      realm.write(() => {
        realm.create(Horse.schemeName, d);
        resolve(null);
      });
    });
  },
};

export default RealmAction;
