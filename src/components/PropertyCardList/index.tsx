import React from 'react'
import { StyleSheet } from 'react-native'
import { Block, Icon, Image, Text } from '../../components'
import { Colors, Images, Metrics, Sizes } from '../../config'
import { useNavigation } from '@react-navigation/native'

interface props {
    onPress: () => {}
}
export const PropertyCardList = ({ onPress }: props) => {
    return (
        <Block
            row
            onPress={() => { onPress() }}
            padding={{ Horizontal: 0, Vertical: Metrics.iPadHeightRatio(5) }}
            style={{ borderRadius: Sizes.Base - 6 }}
            margin={{ Vertical: 6 }}
            shadow
            shadowColor='black'
            backgroundColor={Colors.inverseOnSurface}>
            <Image source={Images.ic_excercise}
                style={{ height: Metrics.heightRatio(108), width: Metrics.heightRatio(108), borderRadius: Sizes.Base - 8, marginHorizontal: Metrics.iPadHeightRatio(5) }}
            />
            <Block row>
                <Block padding={{ Horizontal: 0, Vertical: 5 }} margin={{ Left: 1 }} align='center'>
                    <Text
                        color='secondary'
                        margin={{ Vertical: 4, Top: 2 }}
                        size="H6"
                        font="Medium"
                        align='left'
                        style={{ alignSelf: 'flex-start' }}>
                        {'Core leg exercise'}
                    </Text>
                    <Text
                        // lineHeight={18}
                        numberOfLines={4}
                        padding={{ Horizontal: 2 }}
                        style={{ width: 150 }}
                        color='lightTextColor'
                        size="Small">
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sapien turpis. Donec '}
                    </Text>
                </Block>
                <Block margin={{ Vertical: 12, Left: 0 }} space='between'>
                    <Text
                        style={{ paddingTop: 5 }}
                        color='primary'
                        margin={{ Horizontal: 4 }}
                        size="Small">
                        {'2 Sessions'}
                    </Text>
                    <Text
                        style={{ paddingTop: 5, textDecorationLine: 'underline' }}
                        margin={{ Horizontal: 4 }}
                        color='onSurfaceVariant'
                        size="Small">
                        Read Article
                    </Text>
                </Block>
            </Block >
        </Block >
    )
}

// export default PropertyCardList
// const Styles = StyleSheet.create({
// })