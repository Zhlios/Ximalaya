import IconFont from '@/assets/iconfont';
import {IChannel} from '@/models/home';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Touchable from '@/components/Touchable';

interface IProps {
  data: IChannel;
  onPress: (data: IChannel) => void;
}

class ChannelItem extends React.PureComponent<IProps> {
  onPress = () => {
    const {onPress, data} = this.props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };

  render() {
    const {data} = this.props;
    return (
      <Touchable style={styles.constainer} onPress={this.onPress}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {data.title}
          </Text>
          <Text style={styles.remark} numberOfLines={2}>
            {data.remark}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.playedView}>
              <IconFont name="ting" size={14} />
              <Text style={styles.number}>{data.played}</Text>
            </View>
            <View style={styles.playingView}>
              <IconFont name="ting" size={14} />
              <Text style={styles.number}>{data.playing}</Text>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}

export default ChannelItem;

const styles = StyleSheet.create({
  constainer: {
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
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    backgroundColor: '#f8f8f8',
    padding: 5,
    marginBottom: 5,
  },
  bottom: {
    flexDirection: 'row',
  },
  playedView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginLeft: 5,
  },
});
