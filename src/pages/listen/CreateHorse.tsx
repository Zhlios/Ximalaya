import React, {Component} from 'react';
import {View} from 'react-native';
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

class CreateHorse extends Component<IProps> {
  render() {
    return <View></View>;
  }
}

export default connector(CreateHorse);
