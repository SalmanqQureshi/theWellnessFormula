import React, { useState } from 'react'
import { Block, FlatList, Image, Text } from '../../../components'
import { Colors, Images } from '../../../config'
import { ScrollView } from 'react-native'
import { navigate } from '../../../services'

const Progress = () => {
    const [state, setState] = useState(0)
    const dataArr = ['Foods', 'Exercise', 'Sleep', 'Therapy', 'Supplementary']
    const dataArray2 = [
        { id: 1, title: 'Nutrition 1', description: '2 Sessions remaining!', },
        { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
        { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
        { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
        { id: 2, title: 'Nutrition 1', description: '2 Sessions remaining!', },
        { id: 3, title: 'Nutrition 1', description: '2 Sessions remaining!', },
    ];
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Image source={Images.progress_sreach} style={{ width: '93%', height: 56, borderRadius: 10, marginHorizontal: 16, marginTop: 24 }} />
            <Block style={{ flexDirection: 'row', marginHorizontal: 7 }} margin={{ Top: 13, Bottom: 16 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dataArr.map((item, index) => (
                        <Block
                            onPress={() => setState(index)}
                            style={{
                                backgroundColor: index == state ? Colors.primaryTabs : Colors.tabBar,
                                padding: 12,
                                paddingHorizontal: 10,
                                marginHorizontal: 8,
                                borderRadius: 40
                            }} key={item + "-" + index}>
                            <Text
                                margin={{ Horizontal: 4 }}
                                color='primary'
                                size="Small">{item}</Text>
                        </Block>))}
                </ScrollView>
            </Block>
            <FlatList
                data={dataArray2}
                renderItem={({ item }) => (<Block backgroundColor={Colors.inverseOnSurface} row space='between' style={{ borderRadius: 5, marginHorizontal: 16, marginVertical: 6 }}>
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
                </Block>)}
            />
        </Block>
    )
}

export { Progress }