import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CalendarIconProps {
    color?: string;
    size?: number;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ color = "#B1B1B1", size = 25 }) => {
    return (
        <Svg width={size} height={size + 1} viewBox="0 0 25 26" fill="none">
            <Path d="M3.45499 10.4502H21.795V19.9802C21.795 21.1902 20.805 22.1802 19.595 22.1802H5.65499C4.44499 22.1802 3.45499 21.1902 3.45499 19.9802V10.4502Z" fill={color} />
            <Path d="M5.65499 3.82007H19.595C20.805 3.82007 21.795 4.81007 21.795 6.02007V8.83007H3.45499V6.02007C3.45499 4.81007 4.44499 3.82007 5.65499 3.82007Z" fill={color} />
        </Svg>
    );
};

export default CalendarIcon;
