import React from 'react';
import {Button, Text, View} from 'react-native';
import Horse from '@/realmModel/horseModel';
import {HorseModel} from '@/realmModel/horseModel';

class Listen extends React.Component {
  addHorseData = () => {
    let obj: HorseModel = {
      _id: 0,
      horseName: '123',
      run: '12',
      jockey: 'xiaobai',
      weight: 120,
      trainer: '小黑',
      priority: '123',
      draw: 10,
      Rtg: '12',
      Rtg_Add: '13',
      gear: '15',
    };
    const horse = new Horse();
    horse.writeData(obj);
    horse.getAllData();
  };

  render() {
    return (
      <View>
        <Text>Listen</Text>
        <Button onPress={this.addHorseData} title="添加数据"></Button>
      </View>
    );
  }
}

export default Listen;
