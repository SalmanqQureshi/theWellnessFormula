import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Block, Icon, Image, Text } from '..'
import { Colors, Images, Metrics, Sizes } from '../../config'
import { useNavigation } from '@react-navigation/native'


interface BookCardProps {
    onPress: () => {}
}
export const BookCard = ({ onPress }: BookCardProps) => {
    return (
        <Block
            row
            onPress={() => { onPress() }}
            padding={{ Horizontal: 0, Vertical: Metrics.iPadHeightRatio(5) }}
            style={{ borderRadius: Sizes.Base - 6, borderColor: Colors.outlineVariant, borderWidth: 0.2, }}
            margin={{ Vertical: 6 }}
            shadow
            shadowColor='black'
            backgroundColor={'transparent'}>
            <Image source={Images.meditation_book}
                style={{ height: Metrics.heightRatio(108), width: Metrics.heightRatio(108), borderRadius: Sizes.Base - 8, marginHorizontal: Metrics.iPadHeightRatio(5) }}
            />
            <Block row>
                <Block padding={{ Horizontal: 0, Vertical: 5 }} margin={{ Left: 1 }} align='center' gap={4}>
                    <Text
                        color='primary'
                        margin={{ Vertical: 4, Top: 0 }}
                        size="H6"
                        font="Medium"
                        align='left'
                        style={{ alignSelf: 'flex-start' }}>
                        {'Books Meditations'}
                    </Text>
                    <Text
                        // lineHeight={18}
                        numberOfLines={4}
                        padding={{ Horizontal: 2 }}
                        margin={{ Top: 10 }}
                        style={{ width: 150 }}
                        color='lightTextColor'
                        size="Small">
                        {'Book Price : 18.00$'}
                    </Text>
                    <Text
                        // lineHeight={18}
                        numberOfLines={4}
                        padding={{ Horizontal: 2 }}
                        style={{ width: 150 }}
                        color='lightTextColor'
                        size="Small">
                        {'Author: James Willey'}
                    </Text>
                </Block>
                <Block margin={{ Vertical: 12, Left: 0 }} space='evenly'>
                    <Text
                        style={{ paddingTop: 5 }}
                        color='primary'
                        margin={{ Horizontal: 4 }}
                        size="Small">
                        {'Available Stock'}
                    </Text>
                    <Text
                        align='right'
                        style={{ paddingTop: 0 }}
                        color='primary'
                        margin={{ Horizontal: 4 }}
                        size="H3">
                        {'04'}
                    </Text>
                    <Text
                        align='center'
                        style={{ paddingTop: 6, backgroundColor: Colors.primary, borderRadius: 3 }}
                        margin={{ Horizontal: 8 }}
                        color='onPrimary'
                        padding={{ Horizontal: 12, Bottom: 6 }}
                        size="Small">
                        View
                    </Text>
                </Block>
            </Block >
        </Block >
    )
}
const Styles = StyleSheet.create({
})