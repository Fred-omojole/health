import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
const SvgFeed = (props: SvgProps) => (
  <Svg
    viewBox="0 0 18 18"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 2v2h-4V2zM6 2v6H2V2zm10 8v6h-4v-6zM6 14v2H2v-2zM18 0h-8v6h8zM8 0H0v10h8zm10 8h-8v10h8zM8 12H0v6h8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFeed;
