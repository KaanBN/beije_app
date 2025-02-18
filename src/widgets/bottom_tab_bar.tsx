import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
        <View style={{ flexDirection: 'row', backgroundColor: colors.background, paddingVertical: 10 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const renderedLabel =
                    typeof label === 'function'
                        ? label({ focused: isFocused, color: isFocused ? colors.primary : colors.text, position: 'below-icon', children: '' })
                        : label ?? '';

                const IconComponent = options.tabBarIcon
                    ? options.tabBarIcon({ focused: isFocused, color: isFocused ? colors.primary : colors.text, size: 24 })
                    : null;

                return (
                    <PlatformPressable
                        key={route.key}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        {IconComponent}
                        <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                            {String(renderedLabel)}
                        </Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
};

export default BottomTabBar;
