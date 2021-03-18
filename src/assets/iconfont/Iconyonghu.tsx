/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconyonghu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M526.628571 599.771429c175.542857 0 321.828571 102.4 373.028572 248.685714C980.114286 753.371429 1024 636.342857 1024 512c0-285.257143-226.742857-512-512-512S0 226.742857 0 512c0 138.971429 58.514286 263.314286 146.285714 358.4 36.571429-153.6 197.485714-270.628571 380.342857-270.628571z m-14.628571-438.857143c109.714286 0 197.485714 87.771429 197.485714 197.485714S621.714286 555.885714 512 555.885714 314.514286 468.114286 314.514286 358.4 402.285714 160.914286 512 160.914286z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconyonghu.defaultProps = {
  size: 18,
};

Iconyonghu = React.memo ? React.memo(Iconyonghu) : Iconyonghu;

export default Iconyonghu;
