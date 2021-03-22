import React from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {HorseModel} from '@/realmModel/horseModel';
import RealmAction from '@/realmModel/realmAction';
import HorseItem from '@/pages/listen/HorseItem';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';

const mapStateProps = ({listen, loading}: RootState) => ({
  ...listen,
});

const connector = connect(mapStateProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Listen extends React.Component<IProps> {
  addHorseData = () => {
    let obj: HorseModel = {
      _id: 1001,
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
    RealmAction.addHorse(obj);
    RealmAction.getAllHorse();
  };

  deleteAllData = () => {
    //  Horse.removeAllData();
  };
  getAllData = () => {
    RealmAction.getAllHorse();
  };
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'listen/fetchHorseList',
      params: {},
    });
  }

  renderHorseItem = ({item}: ListRenderItemInfo<HorseModel>) => {
    return <HorseItem data={item}></HorseItem>;
  };

  keyExtractor = (item: HorseModel, index: number) => {
    return item._id.toString();
  };

  render() {
    const {horseList} = this.props;
    return (
      <View style={styles.content}>
        <FlatList
          style={styles.flatlist}
          data={horseList}
          renderItem={this.renderHorseItem}
          keyExtractor={this.keyExtractor}></FlatList>
      </View>
    );
  }
}

export default connector(Listen);

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
});
