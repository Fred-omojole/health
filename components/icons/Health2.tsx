import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHealth2 = (props: SvgProps) => (
  <Svg
  
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <G clipPath="url(#Health-2_svg__a)">
      <Path
        fill="currentColor"
        d="M8.1 9v.9h-.9a.9.9 0 0 0 0 1.8h.9v.9a.9.9 0 0 0 1.8 0v-.9h.9a.9.9 0 1 0 0-1.8h-.9V9a.9.9 0 0 0-1.8 0m9.597-1.573-8.1-7.2a.9.9 0 0 0-1.195 0l-8.1 7.2a.9.9 0 0 0 1.196 1.346l.302-.269V17.1a.9.9 0 0 0 .9.9h12.6a.9.9 0 0 0 .9-.9V8.504l.302.269a.9.9 0 1 0 1.195-1.346M14.4 16.2H3.6V6.904l5.4-4.8 5.4 4.8z"
      />
    </G>
    <Defs>
      <ClipPath id="Health-2_svg__a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHealth2;
