import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import {IGuess} from '@/models/home';
import Touchable from '@/components/Touchable';
import IconFont from '@/assets/iconfont';

const mapStateProps = ({home}: RootState) => ({
  guess: home.guess,
});

const connector = connect(mapStateProps);

type ModelState = ConnectedProps<typeof connector>;

class Guess extends React.Component<ModelState> {
  componentDidMount() {
    this.changeGuess();
  }

  renderItem = ({item}: {item: IGuess}) => {
    return (
      <Touchable style={styles.item}>
        <Image source={{uri: item.image}} style={styles.itemImg} />
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };

  changeGuess = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchGuess',
      payload: {},
    });
  };

  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRight}>
            <IconFont name="xihuan" color="red" />
            <Text style={styles.headergTitle}>猜你喜欢</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headergTitle}>更多</Text>
            <IconFont name="gengduo" />
          </View>
        </View>
        <FlatList
          numColumns={3}
          keyExtractor={(item: IGuess) => item.id}
          data={guess}
          renderItem={this.renderItem}
        />
        <Touchable style={styles.changeGuess} onPress={this.changeGuess}>
          <IconFont name="huanyipi" color="red" />
          <Text>换一批</Text>
        </Touchable>
      </View>
    );
  }
}

export default connector(Guess);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginHorizontal: 6,
    marginVertical: 5,
  },
  itemImg: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headergTitle: {
    marginLeft: 5,
    color: '#333',
  },
  changeGuess: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
