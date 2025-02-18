import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

interface AnalysisIconProps {
    color?: string;
    size?: number;
}

const AnalysisIcon: React.FC<AnalysisIconProps> = ({ color = '#B1B1B1', size = 25 }) => {
    return (
      <Svg width={size} height={size + 1} viewBox="0 0 25 24" fill="none">
        <G clipPath="url(#clip0_464_1895)">
          <Path
            d="M3.73499 7.28003H7.68499C7.96499 7.28003 8.18499 7.50003 8.18499 7.78003V21.17H3.73499C3.45499 21.17 3.23499 20.95 3.23499 20.67V7.78003C3.23499 7.50003 3.45499 7.28003 3.73499 7.28003Z"
            fill={color}
          />
          <Path
            d="M21.015 21.1702H16.565V12.2402C16.565 11.9602 16.785 11.7402 17.065 11.7402H21.015C21.295 11.7402 21.515 11.9602 21.515 12.2402V20.6702C21.515 20.9502 21.295 21.1702 21.015 21.1702Z"
            fill={color}
          />
          <Path
            d="M10.395 2.83008H14.345C14.625 2.83008 14.845 3.05008 14.845 3.33008V21.1701H9.89499V3.33008C9.89499 3.05008 10.125 2.83008 10.395 2.83008Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_464_1895">
            <Rect
              width={18.28}
              height={18.34}
              fill="white"
              transform="translate(3.23499 2.83008)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    );
};

export default AnalysisIcon;
