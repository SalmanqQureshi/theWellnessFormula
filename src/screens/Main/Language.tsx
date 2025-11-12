import React, { useState } from 'react'
import { Block, CheckBox, Image, Text } from '../../components'
import { Colors, Images } from '../../config'
import { Ra } from 'react-nativ'

const Language = () => {
    const [langState, setLangState] = useState(0)
    const languageData = [
        {
            title: 'English',
            isTrue: true,
            images: Images.flag_english
        },
        {
            title: 'Spanish',
            isTrue: false,
            images: Images.flag_spain
        },
        {
            title: 'France',
            isTrue: false,
            images: Images.flag_france
        },
        {
            title: 'German',
            isTrue: false,
            images: Images.flag_german
        },
    ]
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Block margin={{ Top: 24, Horizontal: 16 }}>
                {languageData.map((item, index) => (
                    <Block
                        onPress={() => setLangState(index)}
                        backgroundColor='white'
                        padding={{ Vertical: 10, Horizontal: 16 }}
                        margin={{ Top: 20, }}
                        style={{
                            borderRadius: 10, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,

                            elevation: 4,
                        }}
                        row>
                        <Image source={item.images} style={{}} />
                        <Text align='center' style={{ alignSelf: 'center' }} margin={{ Left: 16 }} size={'H5'}>{item.title}</Text>
                        <Block align='right' flex style={{ alignSelf: 'center' }}>
                            <Image source={langState == index ? Images.radio_button_check : Images.radio_button} style={{}} />
                        </Block>
                    </Block>
                ))}
            </Block>
        </Block>
    )
}

export { Language }