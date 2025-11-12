import React, { useEffect } from 'react'
import { Block, FlatList, Text } from '../../components'
import {PdfListningCard} from '../../components'
import { useNavigation } from '@react-navigation/native'
import { Colors, Metrics } from '../../config'
import { Platform } from 'react-native'

export const ProjectDetailPdfList = (props:any) => {
    useEffect(()=>{
        props.navigation.setOptions({
            headerTitle:()=><Text size="H4" font="SemiBold">{props.route.params.ScreenTitleName}</Text>,
        })
    },[])
    const {navigate}=useNavigation()
    return (
        <Block flex gradient={[Colors.background,Colors.textBackground]}>
            <FlatList
                contentContainerStyle={{paddingBottom: 24,marginTop:Metrics.iPadHeightRatio(6) }}
                data={Array(6)}
                // numColumns={Platform.isPad && 2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <PdfListningCard
                            onPress={() => navigate('ProjectDetailPdfPage')}
                            item={item}
                        />)
                }} />
        </Block>
    )
}