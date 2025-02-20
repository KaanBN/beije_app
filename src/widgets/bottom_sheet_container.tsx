import React from 'react';
import { StyleSheet, Text } from 'react-native';
import BottomSheetCard from './bottom_sheet_card.tsx';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import InsightsList from './InsightsList.tsx';

const BottomSheetContainer = () => {
    return (
        <BottomSheetScrollView contentContainerStyle={styles.sheetContent}>
            <Text style={styles.sheetTitle}>Bugün Öne Çıkanlar</Text>
            <BottomSheetCard style={styles.headCard}>
                <Text style={styles.title}>Notlar</Text>
                <Text style={styles.desc}>Şekerli yiyeceklerden kaçınmak, şişkinliği azaltabilir.</Text>
            </BottomSheetCard>
            <InsightsList />
        </BottomSheetScrollView>
    );
};

const styles = StyleSheet.create({
    sheetContent: {
        padding: 20,
        alignItems: 'center',
    },
    sheetTitle: {
        fontSize: 18,
        color: '#343131',
        fontWeight: '500',
        alignSelf: 'flex-start',
    },
    headCard: {
        marginVertical: 10,
    },
    title: {
        fontSize: 16,
        color: '#343131',
        fontWeight: '400',
    },
    desc: {
        fontSize: 14,
        color: '#343131',
        fontWeight: '400',
        opacity: 0.5,
    },
});

export default BottomSheetContainer;
