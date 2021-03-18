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

let Icongengduo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M674.210909 512L246.365091 84.154182A46.545455 46.545455 0 0 1 312.180364 18.292364l460.8 460.8a46.545455 46.545455 0 0 1 0 65.815272l-460.8 460.8a46.545455 46.545455 0 0 1-65.815273-65.861818L674.210909 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongengduo.defaultProps = {
  size: 18,
};

Icongengduo = React.memo ? React.memo(Icongengduo) : Icongengduo;

export default Icongengduo;
