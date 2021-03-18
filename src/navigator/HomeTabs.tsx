import React from 'react';
import {View} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/home/Home';
import TabbarWrapper from '@/pages/home/TabbarWrapper';

const Tab = createMaterialTopTabNavigator();

class HomeTab extends React.Component {
  renderTabbar = (props: MaterialTopTabBarProps) => {
    return <TabbarWrapper {...props} />;
  };

  render() {
    return (
      <Tab.Navigator
        tabBar={this.renderTabbar}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {
            width: 80,
          },
          indicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86422',
          },
          allowFontScaling: true,
          activeTintColor: '#f86422',
          inactiveTintColor: '#333',
        }}
        lazy>
        <Tab.Screen
          name="home1"
          component={Home}
          options={{tabBarLabel: '推荐'}}
        />
        <Tab.Screen
          name="home2"
          component={Home}
          options={{tabBarLabel: '热门'}}
        />
      </Tab.Navigator>
    );
  }
}

export default HomeTab;
