import React, { useRef, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetContainer from '../widgets/bottom_sheet_container.tsx';
import {NotificationIcon} from '../assets/react_icons';

const CycleScreen = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['25%', '75%'], []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={[styles.circle, styles.leftCircle]}>
                <Text style={styles.circleText}>Y</Text>
            </View>

            <View style={[styles.circle, styles.rightCircle]} >
                <NotificationIcon />
            </View>

            <View style={styles.centeredView}>
                <Text style={styles.screenText}>Cycle Screen</Text>
            </View>

            <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints} backgroundStyle={{ backgroundColor: '#f7f7f7' }}>
                <BottomSheetContainer />
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    circle: {
        position: 'absolute',
        width: 32,
        height: 32,
        borderRadius: 25,
    },
    leftCircle: {
        backgroundColor: '#f28464',
        top: 20,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightCircle: {
        backgroundColor: 'white',
        top: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default CycleScreen;
