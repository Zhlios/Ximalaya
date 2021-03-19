import Realm from 'realm';
import realm from '@/realmModel/index';
import homeModel from '@/models/home';

export interface HorseModel {
  _id: number;
  run: string;
  horseName: string;
  weight: number;
  jockey: string;
  draw: number;
  trainer: string;
  Rtg: string;
  Rtg_Add: string;
  priority: string;
  gear: string;
}

class Horse {
  public data: HorseModel;
  static schemeName: string = 'horseMatch';
  constructor(data: HorseModel) {
    this.data = data;
  }
  public static scheme: Realm.ObjectSchema = {
    name: Horse.schemeName,
    properties: {
      _id: 'int',
      horseName: 'string',
      weight: 'float',
      jockey: 'string',
      draw: 'int',
      trainer: 'string',
      Rtg: 'string',
      Rtg_Add: 'string',
      priority: 'string',
      gear: 'string',
    },
    primaryKey: '_id',
  };

  private getHorseId = () => {
    const matchList = realm.objects(Horse.schemeName);
    if (matchList.length > 0) {
      return matchList.length + 1;
    } else {
      return 0;
    }
  };

  public writeData() {
    realm.write(() => {
      this.data._id = this.getHorseId();
      realm.create(Horse.schemeName, this.data);
    });
  }

  public getAllData() {
    const data = realm.objects(Horse.schemeName);
    console.log(data);
  }
}

export default Horse;
