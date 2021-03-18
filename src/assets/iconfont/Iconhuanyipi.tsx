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

let Iconhuanyipi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M793.952 508.288c-21.92 0-39.68 18.432-39.68 41.152v82.336c0 22.752-17.824 41.184-39.744 41.184h-380.16l44.096-45.696c11.328-10.08 16.256-25.856 12.8-40.896a40.48 40.48 0 0 0-29.344-30.4 38.912 38.912 0 0 0-39.488 13.248l-110.816 114.464c-8.48 7.68-13.376 18.784-13.504 30.464-0.16 11.072 3.968 21.76 11.52 29.632l112.416 116.512c9.696 11.744 24.96 16.864 39.456 13.248 14.528-3.616 25.856-15.36 29.344-30.4 3.488-15.04-1.44-30.816-12.8-40.896l-44.864-46.944H754.24c43.872 0 79.456-36.864 79.456-82.336v-123.52c0-22.72-17.792-41.152-39.744-41.152zM833.696 288a41.824 41.824 0 0 0-13.504-30.464L709.76 143.04a38.72 38.72 0 0 0-53.952 2.144 42.272 42.272 0 0 0-2.08 55.904l44.096 45.696H277.568c-43.904 0-79.456 36.864-79.456 82.368v123.52c0 22.72 17.792 41.152 39.712 41.152 21.952 0 39.744-18.432 39.744-41.152v-82.368c0-10.912 4.16-21.376 11.616-29.12a39.04 39.04 0 0 1 28.096-12.032h381.344l-45.28 46.912a42.272 42.272 0 0 0 2.08 55.904 38.72 38.72 0 0 0 53.92 2.176l112.416-116.544c7.584-7.68 11.872-18.24 11.936-29.216V288z"
        fill={getIconColor(color, 0, '#1374BD')}
      />
    </Svg>
  );
};

Iconhuanyipi.defaultProps = {
  size: 18,
};

Iconhuanyipi = React.memo ? React.memo(Iconhuanyipi) : Iconhuanyipi;

export default Iconhuanyipi;
