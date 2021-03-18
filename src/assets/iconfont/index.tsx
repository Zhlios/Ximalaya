/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconhuanyipi from './Iconhuanyipi';
import Iconxihuan from './Iconxihuan';
import Icongengduo from './Icongengduo';
import Iconting from './Iconting';
import Iconshouye from './Iconshouye';
import Iconyonghu from './Iconyonghu';
import Iconfaxian from './Iconfaxian';

export type IconNames = 'huanyipi' | 'xihuan' | 'gengduo' | 'ting' | 'shouye' | 'yonghu' | 'faxian';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'huanyipi':
      return <Iconhuanyipi key="1" {...rest} />;
    case 'xihuan':
      return <Iconxihuan key="2" {...rest} />;
    case 'gengduo':
      return <Icongengduo key="3" {...rest} />;
    case 'ting':
      return <Iconting key="4" {...rest} />;
    case 'shouye':
      return <Iconshouye key="5" {...rest} />;
    case 'yonghu':
      return <Iconyonghu key="6" {...rest} />;
    case 'faxian':
      return <Iconfaxian key="7" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
