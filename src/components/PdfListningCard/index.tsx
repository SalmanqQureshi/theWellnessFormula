import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Block, Icon, Image, Text } from '..'
import { Colors, Images, Metrics, Sizes } from '../../config'
import { useNavigation } from '@react-navigation/native'


interface PdfListningProps {
    onPress: () => {}
}
export const PdfListningCard = ({onPress}:PdfListningProps) => {
    return (
        <Block
            flex
            onPress={() => {onPress() }}
            style={{ borderRadius: Sizes.Base - 0, }}
            margin={{ Vertical: 6, Horizontal:  Metrics.iPadHeightRatio(16) }}
            shadow
            shadowColor='black'
            backgroundColor={Colors.onPrimary}>
            <Image source={Images.flag_english}
                style={{ width: '100%', borderRadius: Sizes.Base - 8, }} />
            <Block padding={{Horizontal:16}} height={70} style={{ width: '100%',}} row space='between'>
                <Block>
                    <Text
                        padding={{Top:10}}
                        font='Medium'
                        size="H6">
                        {'ASF Trench block'}
                    </Text>
                    <Text
                        padding={{ Vertical: 10 }}
                        color='lightTextColor'
                        size="Body">
                        {'Revision 2'}
                    </Text>
                </Block>
                <Icon name="icDownload" />
            </Block>
        </Block>
    )
}
const Styles = StyleSheet.create({
})