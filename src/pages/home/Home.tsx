import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import Carousel from '@/pages/home/Carousel';
import Guess from '@/pages/home/Guess';
import ChannelItem from '@/pages/home/ChannelItem';
import {IChannel} from '@/models/home';

const mapStateProps = ({home, loading}: RootState) => ({
  ...home,
  loading: loading.effects['home/fetchCarousels'],
});

const connector = connect(mapStateProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

interface IState {
  refreshing: boolean;
}

class Home extends React.Component<IProps, IState> {
  state = {
    refreshing: false,
  };

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchChannel',
      params: {},
    });
  }

  renderItem = ({item}: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem data={item} onPress={this.onPress} />;
  };

  onPress = (data: IChannel) => {
    console.log(data);
  };

  get header() {
    const {carousels} = this.props;
    return (
      <View>
        <Carousel data={carousels} />
        <Guess />
      </View>
    );
  }

  get footer() {
    const {pagination, loading, channels} = this.props;
    console.log(pagination);
    if (pagination.hasMore == false) {
      return (
        <View>
          <Text>我是有底线的</Text>
        </View>
      );
    }
    if (loading && pagination.hasMore && channels.length > 0) {
      return (
        <View>
          <Text>正在加载中。。。。</Text>
        </View>
      );
    }
  }
  get empty() {
    const {loading} = this.props;
    if (loading) return;
    return (
      <View>
        <Text>暂无数据</Text>
      </View>
    );
  }

  keyExtractor = (item: IChannel) => {
    return item.id;
  };

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchChannel',
      params: {},
      callback: () => {
        this.setState({
          refreshing: false,
        });
      },
    });
  };

  onEndReached = () => {
    const {dispatch, loading, pagination} = this.props;
    if (loading && pagination.hasMore === false) {
      return;
    }

    dispatch({
      type: 'home/fetchChannel',
      payload: {
        loadMore: true,
      },
      params: {},
    });
  };

  render() {
    const {channels} = this.props;
    const {refreshing} = this.state;
    return (
      <FlatList
        ListEmptyComponent={this.empty}
        ListFooterComponent={this.footer}
        refreshing={refreshing}
        onRefresh={this.onRefresh}
        ListHeaderComponent={this.header}
        data={channels}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.2}></FlatList>
    );
  }
}

export default connector(Home);

const styles = StyleSheet.create({});
