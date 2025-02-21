import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BottomSheetCard from './bottom_sheet_card.tsx';
import {EggIcon} from '../assets/react_icons';

const InsightsList = () => {
    const insights = [
        {
            '_id': '60a1b2c3d4e5f6789ab1c2d3',
            'title': 'Adet dönemi başlangıcı',
            'content': 'Adet dönemi, bir kadının vücudunun doğal bir döngüsüdür. İlk adet kanaması genellikle 12-14 yaşlarında başlar.',
        },
        {
            '_id': '60a1b2c3d4e5f6789ab1c2d4',
            'title': 'Adet sancıları nasıl geçer?',
            'content': 'Sıcak su torbası ve hafif egzersiz adet sancılarını hafifletebilir. Ayrıca, bitki çayları da rahatlatıcı etki yapabilir.',
        },

    ];
    return (
        <BottomSheetCard style={styles.container}>
            {insights.map((insight) => (
                <View key={insight._id} style={styles.insightCard}>
                    <EggIcon style={styles.iconContainer} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{insight.title}</Text>
                        <Text style={styles.content}>{insight.content}</Text>
                    </View>
                </View>
            ))}
        </BottomSheetCard>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    insightCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        marginBottom: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 11,
        color: '#b1b1b1',
        fontWeight: '400',
    },
    content: {
        fontSize: 16,
        color: '#343131',
        fontWeight: '400',
    },
});

export default InsightsList;
