import React from 'react';
import {View, Text, Image} from 'react-native';
import {HorseModel} from '@/realmModel/horseModel';

interface IProps {
  data: HorseModel;
}

class HorseItem extends React.PureComponent<IProps> {
  render() {
    const {data} = this.props;
    return (
      <View>
        <Text>{data.jockey}</Text>
      </View>
    );
  }
}

export default HorseItem;
