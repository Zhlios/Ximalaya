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

export default class Horse {
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
}
