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

let Iconfaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M122.368 753.9712a457.472 457.472 0 0 1-68.1984-240.9472c0-253.5936 205.312-459.264 458.5472-459.264a455.936 455.936 0 0 1 234.8544 64.8192c-95.0784 59.8016-214.3744 157.184-334.2336 277.1968-129.9456 130.0992-233.2672 259.5328-291.0208 358.1952z m390.3488 218.3168a455.5264 455.5264 0 0 1-225.9456-59.904c-86.8864 53.248-152.2176 73.5744-176.9984 48.7424-52.224-52.3264 96.1024-285.7984 331.3152-521.4208 235.3152-235.6224 468.4288-384.1536 520.704-331.776 24.9856 24.9856 4.096 91.3408-50.0736 179.456a456.8064 456.8064 0 0 1 59.5456 225.6896c0 253.5936-205.312 459.2128-458.5472 459.2128z m181.1456-414.4128c30.72 0 55.7056-25.0368 55.7056-55.7568s-24.9856-55.7568-55.7056-55.7568a55.808 55.808 0 0 0 0 111.5136z m-143.36 245.76a90.112 90.112 0 0 0 89.856-89.9072 90.112 90.112 0 0 0-89.856-89.856 90.112 90.112 0 0 0-89.9072 89.856 90.112 90.112 0 0 0 89.9072 89.9072z m0-52.3264a37.888 37.888 0 0 1-37.5808-37.5808c0-20.48 17.1008-37.5296 37.5808-37.5296a37.5296 37.5296 0 1 1 0 75.1104z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfaxian.defaultProps = {
  size: 18,
};

Iconfaxian = React.memo ? React.memo(Iconfaxian) : Iconfaxian;

export default Iconfaxian;
