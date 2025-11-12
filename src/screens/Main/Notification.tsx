import React from 'react'
import { Block, Image, Text } from '../../components'
import { Colors, Images } from '../../config'
import { ScrollView, View } from 'react-native'

const Notification = () => {
    const languageData = [
        {
            title: 'Lorem Ipsum is simply dummy...',
            isTrue: true,
            images: Images.icUser
        },
        {
            title: 'Lorem Ipsum is simply...',
            isTrue: false,
            images: Images.icUser
        },
        {
            title: 'Lorem Ipsum is simply dummy...',
            isTrue: false,
            images: Images.icUser
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing...',
            isTrue: true,
            images: Images.icUser
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing and type...',
            isTrue: true,
            images: Images.icUser
        },
        {
            title: 'Lorem Ipsum is simply dummy...',
            isTrue: true,
            images: Images.icUser
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing...',
            isTrue: false,
            images: Images.icUser
        },
    ]
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Text
                style={{ alignSelf: 'flex-end', }}
                margin={{ Horizontal: 16, }}
                color='primary'
                size={'H5'}
                numberOfLines={2}>
                {'Clear All'}
            </Text>
            <ScrollView>
                <Block margin={{ Top: 0, Horizontal: 16 }}>
                    {languageData.map((item, index) => (
                        <Block
                            backgroundColor='transparent'
                            padding={{ Vertical: 15, Horizontal: 16 }}
                            margin={{ Top: 20, }}
                            style={{
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: Colors.primary
                            }}
                            row>
                            <Image source={item.images} style={{}} size={42} />
                            <Block align='center' gap={4}>
                                <Text style={{ alignSelf: 'center', width: 200 }} margin={{ Left: 12 }} size={'Body'} numberOfLines={2}>
                                    {item.title}
                                </Text>
                                <Text style={{ alignSelf: 'center', width: 200 }} margin={{ Left: 12 }} size={'Small'} numberOfLines={2} color='outline'>
                                    {'2 day ago'}
                                </Text>
                            </Block>
                            <Block align='right' flex style={{ alignSelf: 'center' }}>
                                {item?.isTrue && <View style={{ backgroundColor: Colors.error, width: 12, height: 12, borderRadius: 12 }} />}
                            </Block>
                        </Block>
                    ))}
                </Block>
            </ScrollView>
        </Block>
    )
}

export { Notification }