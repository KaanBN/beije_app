import React, { useRef, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetContainer from '../widgets/bottom_sheet_container.tsx';

const CycleScreen = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['25%', '75%'], []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.centeredView}>
                <Text style={styles.screenText}>Cycle Screen</Text>
            </View>

            {/* Bottom Sheet */}
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
});

export default CycleScreen;
