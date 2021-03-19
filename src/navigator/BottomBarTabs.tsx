import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '@/navigator/HomeTabs';
import Listen from '@/pages/listen/Listen';
import Found from '@/pages/found/Found';
import Account from '@/pages/account/Account';
import {RootStackNavigation, RootStackParamList} from '@/navigator/index';
import IconFont from '@/assets/iconfont';
import {Button} from 'react-native';

export type BottomTabParamsList = {
  HomeTab: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

type Route = RouteProp<RootStackParamList, 'BottomBarTabs'>;

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(routeName: string) {
  switch (routeName) {
    case 'HomeTab':
      return '首页';
      break;
    case 'Listen':
      return '我听';
      break;
    case 'Found':
      return '发现';
      break;
    case 'Account':
      return '账号';
      break;
    default:
      return '首页';
      break;
  }
}

class BottomBarTabs extends React.Component<IProps> {
  componentDidMount() {
    this.setOption();
  }
  componentDidUpdate() {
    this.setOption();
  }

  setOption = () => {
    const {navigation, route} = this.props;
    const routeName = getFocusedRouteNameFromRoute(route) || '';
    switch (routeName) {
      case 'HomeTab':
        {
          navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerRight: () => null,
          });
        }

        break;
      case 'Listen':
        {
          navigation.setOptions({
            headerTransparent: false,
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.push('CreateHorse', {});
                }}
                title="编辑"></Button>
            ),
            headerTitle: getHeaderTitle(routeName),
          });
        }
        break;
      case 'Found':
        {
          navigation.setOptions({
            headerTransparent: false,
            headerRight: () => null,
            headerTitle: getHeaderTitle(routeName),
          });
        }
        break;
      case 'Account':
        {
          navigation.setOptions({
            headerTransparent: false,
            headerRight: () => null,
            headerTitle: getHeaderTitle(routeName),
          });
        }
        break;

      default:
        break;
    }
    if (routeName === 'HomeTab') {
    } else {
    }
  };

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f86442',
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            tabBarLabel: '首页',
            title: '首页',
            tabBarIcon: ({color, size}) => (
              <IconFont name="shouye" color={color}></IconFont>
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
            title: '我听',
            tabBarIcon: ({color, size}) => (
              <IconFont name="ting" color={color}></IconFont>
            ),
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <IconFont name="faxian" color={color}></IconFont>
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '账号',
            tabBarIcon: ({color, size}) => (
              <IconFont name="yonghu" color={color}></IconFont>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomBarTabs;
