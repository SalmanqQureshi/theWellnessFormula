import React from 'react'
import { Block, Image, Text } from '../../../components'
import { Colors, Images } from '../../../config'
import { ImageBackground, Platform, ScrollView, StyleSheet, View } from 'react-native'
import { navigate } from '../../../services';


const dataArray = [
    { id: 1, title: 'Nutrition', description: 'Get Healthy Diet', images: Images.ic_nutrition },
    { id: 2, title: 'Exercise', description: 'Get Healthy Diet', images: Images.ic_exercise2 },
    { id: 3, title: 'Sleep', description: 'Get Healthy Diet', images: Images.ic_sleep },
    { id: 4, title: 'Hot & Cold', description: 'Get Healthy Diet', images: Images.ic_hotcold },
    { id: 5, title: 'Supplement', description: 'Get Healthy Diet', images: Images.ic_supplement },
    { id: 6, title: 'Consultant a Dr.', description: 'Get Healthy Diet', images: Images.ic_consultant },
];
const dataArray2 = [
    { id: 1, title: 'Nutrition 1', description: '2 Sessions remaining!', },
    { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
    { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
    { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
    { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
    { id: 3, title: 'Nutrition 1', description: '2 Sessions remaining!', },
];



const Home = () => {
    const rows = [];
    for (let i = 0; i < dataArray.length; i += 2) {
        rows.push(dataArray.slice(i, i + 2));
    }
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Block margin={{ Horizontal: 16, Top: 20 }}>
                    <Image source={Images.frame_card} style={{ width: '100%', height: 108, borderRadius: 10 }} />
                    {/* </ImageBackground> */}
                </Block>
                <Block margin={{ Horizontal: 15, Top: 20 }} padding={{ Horizontal: 4, Vertical: 15 }} style={{ borderColor: Colors.outlineVariant, borderWidth: 0.5, borderRadius: 10 }}>
                    <Text
                        style={{ paddingTop: 5 }}
                        color='outline'
                        margin={{ Horizontal: 4 }}
                        size="Small">
                        {'Quick Actions'}
                    </Text>
                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((item) => (
                                <Block backgroundColor={Colors.secondary} row width={Platform.OS == 'android' ? 174 : 156} style={{ borderRadius: 5, marginHorizontal: 6 }}>
                                    <Block margin={{ Horizontal: 10, Vertical: 16 }} gap={4}>
                                        <Text size='H6' color='onPrimary'>{item.title}</Text>
                                        <Text size='Small' color='onPrimary'>{item.description}</Text>
                                    </Block>
                                    <Image source={item.images} style={{ width: item?.id == 6 ? 30 : 36, height: item?.id == 6 ? 30 : 36, borderRadius: 10, alignSelf: 'center' }} />
                                </Block>))}
                        </View>))}
                </Block>
                <Image source={Images.frame_card2} style={{ width: '93%', height: 56, borderRadius: 10, marginHorizontal: 16, marginVertical: 12 }} />
                <Block margin={{ Horizontal: 15, Top: 0, Bottom: 80 }} padding={{ Horizontal: 4, Vertical: 15 }} style={{ borderColor: Colors.outlineVariant, borderWidth: 0.5, borderRadius: 10 }}>
                    <Text
                        style={{ paddingTop: 5 }}
                        color='outline'
                        margin={{ Horizontal: 4 }}
                        size="Small">
                        {'Resume Your Wellness journey'}
                    </Text>
                    {dataArray2.map((item) => (
                        <Block backgroundColor={Colors.inverseOnSurface} row space='between' style={{ borderRadius: 5, marginHorizontal: 6, marginVertical: 6 }}>
                            <Block margin={{ Horizontal: 10, Vertical: 16 }} gap={4}>
                                <Text size='H6' color='secondary'>{item.title}</Text>
                                <Text size='Small' color='outline'>{item.description}</Text>
                            </Block>
                            <Text
                                onPress={() => navigate('Nutrition')}
                                padding={{ Vertical: 8, Horizontal: 10 }}
                                margin={{ Left: 34 }}
                                style={{ alignSelf: 'center', backgroundColor: Colors.primary, borderRadius: 15 }}
                                color='surface'
                                size="Small">{'Resume'}</Text>
                            <Image source={Images.icons_clock} style={{ width: 36, height: 36, alignSelf: 'center', marginRight: 12 }} />
                        </Block>
                    ))}
                </Block>
            </ScrollView>
        </Block>
    )
}

export { Home }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        // marginBottom: 10,
        marginTop: 10,
    },
    column: {
        width: '48%',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
    },
});
