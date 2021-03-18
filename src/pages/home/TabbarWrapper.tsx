import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  MaterialTopTabBarProps,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Touchable from '@/components/Touchable';
import {Text} from 'react-native-svg';

interface IProps extends MaterialTopTabBarProps {}

class TabbarWrapper extends React.Component<IProps> {
  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
        <View style={styles.topbarView}>
          <MaterialTopTabBar {...props} style={styles.tabbar} />
          <Touchable style={styles.categoryBtn}>
            <Text>分别</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(),
  },
  topbarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabbar: {
    flex: 1,
    elevation: 0,
  },
  categoryBtn: {
    paddingHorizontal: 20,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#eee',
  },
});

export default TabbarWrapper;
