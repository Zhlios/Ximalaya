import realm from '@/realmModel/index';
import {HorseModel} from '@/realmModel/horseModel';
import Horse from '@/realmModel/horseModel';
interface realmActionModel {
  getAllHorse(): any;
  addHorse(d: HorseModel): any;
  createId(): number;
}
const RealmAction: realmActionModel = {
  getAllHorse() {
    const data = realm.objects(Horse.schemeName);
    return data;
  },
  createId() {
    const data = realm.objects(Horse.schemeName);
    return data.length + 1;
  },

  addHorse(d: HorseModel) {
    return new Promise((resolve, reject) => {
      realm.write(() => {
        d._id = this.createId();
        realm.create(Horse.schemeName, d);
        resolve(null);
      });
    });
  },
};

export default RealmAction;
