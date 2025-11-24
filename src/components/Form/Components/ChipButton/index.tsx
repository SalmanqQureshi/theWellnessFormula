import React from 'react'
import { Block } from '../../../Layout'
import { Text } from '../../../Text'
import { TextInput } from '../TextInput'
import { Colors, Metrics } from '../../../../config'
import { Platform } from 'react-native'

type ChipInputButtonType = {
    onChangeText: (value:any) => {},
    chipText: [],
    value:'',
    onSubmit:()=>{}
}
const ChipInputButton = ({ onChangeText, chipText,value,onSubmit }: ChipInputButtonType) => {
    return (
        <Block flex style={{
            borderRadius: Metrics.heightRatio(10),
            minHeight: Platform.OS == 'ios' ? 52 : 58,
            // paddingTop: 14,
            // paddingStart: Metrics.heightRatio(10),
            // flexDirection: "row",
            // marginVertical: 6,
            // maxHeight: Metrics.heightRatio(52),
            // height: Metrics.heightRatio(52),
            // alignItems: "center",
            // borderWidth: 1,
        }}>
            <TextInput
                label='Hobbies'
                type='Text'
                value={value}
                onChangeText={(value) => onChangeText(value)}
                onSubmitEditing={()=>onSubmit()}
                // multiline
            />

            <Block row>
                {chipText?.map((item) => (
            <Block flex
                backgroundColor={Colors.chatsideColor}
                margin={{Right:12}}
                align='center'
                style={{alignSelf:'center',borderRadius:12,alignContent:'center'}} padding={{ Horizontal: 5, Vertical: 5 }} row>
                    <Text >{item}</Text>
            </Block>
                ))}
            </Block>
        </Block>
    )
}

export { ChipInputButton }