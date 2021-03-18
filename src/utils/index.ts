import {Dimensions} from 'react-native';

const {width: viewWidth, height: viewHeight} = Dimensions.get('window');

function wp(percentage: number) {
  const value = (percentage * viewWidth) / 100.0;
  return Math.round(value);
}

function hp(percentage: number) {
  const value = (percentage * viewHeight) / 100.0;
  return Math.round(value);
}

export {viewWidth, viewHeight, hp, wp};
