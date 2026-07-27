import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
const SvgUser = (props: SvgProps) => (
  <Svg viewBox="0 0 18 18" width={18} height={18} fill="none" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 7c2.67 0 8 1.33 8 4v3H1v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V14c0-.64-3.13-2.1-6.1-2.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUser;
