import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import Home from '@/pages/home/Home';
import Detail from '@/pages/Detail';
import CreateHorse from '@/pages/listen/CreateHorse';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import BottomBarTabs from '@/navigator/BottomBarTabs';

export type RootStackParamList = {
  BottomBarTabs: {
    screen?: string;
  };
  Detail: {id: number};
  CreateHorse: {};
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <Stack.Screen
            name="BottomBarTabs"
            component={BottomBarTabs}></Stack.Screen>
          <Stack.Screen
            name="Detail"
            options={{headerTitle: '详情'}}
            component={Detail}></Stack.Screen>
          <Stack.Screen
            name="CreateHorse"
            options={{headerTitle: '详情'}}
            component={CreateHorse}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
