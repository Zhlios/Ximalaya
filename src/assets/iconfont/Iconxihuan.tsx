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

let Iconxihuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1160 1024" width={size} height={size} {...rest}>
      <Path
        d="M571.99796036 962c339.98863974-205.85917617 509.99796036-409.34836231 509.99795946-610.43755781C1081.99591982 49.91364864 747.31725898-53.34593887 571.99796036 223.04295547 396.67866172-53.34593887 62 49.91364864 62 351.56244219 62 552.6516377 232.00931972 756.14082383 571.99796036 962z"
        fill={getIconColor(color, 0, '#d81e06')}
      />
    </Svg>
  );
};

Iconxihuan.defaultProps = {
  size: 18,
};

Iconxihuan = React.memo ? React.memo(Iconxihuan) : Iconxihuan;

export default Iconxihuan;
