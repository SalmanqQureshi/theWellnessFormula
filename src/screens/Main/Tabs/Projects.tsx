import React, { useEffect, useState } from 'react'
import { Block, FlatList, Image, Text, TextInput, SearchBar, PropertyCardList } from '../../../components'
// import PropertyCardList from '../../../components/PropertyCardList'
import { TabProps } from './'
import { Colors, Fonts, Images, Metrics, Sizes } from '../../../config'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, View } from 'react-native'

export const Projects = (props: TabProps<'Projects'>) => {
    const [SearchText, setSearchText] = useState('');
    const [state, setState] = useState(0)
    const { navigate } = useNavigation()
    const dataArr = ['Foods', 'Exercise', 'Sleep', 'Therapy', 'Supplementary']
    // useEffect(() => {
    //     props.navigation.setOptions({
    //         // headerBackground: () => (
    //         //     <Image
    //         //         source={Images.backgroundScreen}
    //         //         style={{ width: '100%', height: '100%', backgroundColor: Colors.onPrimary, position: 'absolute' }}
    //         //         resizeMode="cover"
    //         //     />
    //         // ),
    //         // headerLeft: () => (
    //         //     <Image margin={{ Left: 22 }} source={Images.LoginLogo}
    //         //         style={{
    //         //             width: Metrics.heightRatio(60),
    //         //             height: Metrics.heightRatio(60)
    //         //         }} />
    //         // ),
    //         // headerRight: () => (
    //         //     <Block margin={{ Right: 24 }} row gap={8}>
    //         //         <Image source={Images.icNotification} style={{
    //         //             width: Metrics.heightRatio(32),
    //         //             height: Metrics.heightRatio(32)
    //         //         }} />
    //         //         <Image source={Images.icUser} style={{
    //         //             width: Metrics.heightRatio(32),
    //         //             height: Metrics.heightRatio(32)
    //         //         }} />
    //         //     </Block>
    //         // ),
    //     })
    // }, [])
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Block style={{ marginTop: Metrics.iPadHeightRatio(24), marginHorizontal: Metrics.iPadHeightRatio(12) }}>
                <SearchBar onChange={s => setSearchText(s)} />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Block padding={{}} style={{ flexDirection: 'row', margin: 0 }} margin={{ Top: 13 }}>
                        {dataArr.map((item, index) => (
                            <Block
                                onPress={() => setState(index)}
                                style={{
                                    backgroundColor: state == index ? Colors.primaryTabs : Colors.tabBar,
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
                    </Block>
                </ScrollView>
                <FlatList
                    style={{ marginBottom: Metrics.heightRatio(60), marginTop: 8 }}
                    data={[{}, {}, {}, {}]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <PropertyCardList
                                key={"VideoCard" + item.id + item.is_liked}
                                onPress={() => navigate('Article')}
                                item={item}
                            />)
                    }} />
            </Block>
        </Block>
    )
}
