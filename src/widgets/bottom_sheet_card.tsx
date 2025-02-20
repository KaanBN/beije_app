import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type BottomSheetCardProps = {
    children: React.ReactNode;
    style?: any;
};

const BottomSheetCard = ({children, style}:BottomSheetCardProps) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
    },
});

export default BottomSheetCard;
