import Navigator from '@/navigator/index';
import React from 'react';
import {Provider} from 'react-redux';
import store from '@/config/dva';
import {StatusBar} from 'react-native';
export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
        <StatusBar
          backgroundColor="transparent"
          barStyle="default"
          translucent
        />
      </Provider>
    );
  }
}
