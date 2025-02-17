import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AnalysisScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Analysis Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default AnalysisScreen;
