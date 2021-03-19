import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {HorseModel} from '@/realmModel/horseModel';

interface IProps {
  data: HorseModel;
}

class HorseItem extends React.PureComponent<IProps> {
  render() {
    const {data} = this.props;
    return (
      <View style={styles.content}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1786944636,4007319473&fm=26&gp=0.jpg',
            }}
          />
        </View>
        <View style={styles.rightContent}>
          <Text>{data.horseName}</Text>
          <View>
            <Text>
              骑手:<Text>{data.jockey}</Text>
            </Text>
          </View>
          <View>
            <Text>
              驯养师:<Text>{data.trainer}</Text>
            </Text>
          </View>
          <View>
            <Text>
              最近6场:<Text>{data.jockey}</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default HorseItem;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#dedede',
  },
  rightContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
