import React from 'react'
import { Block, Text, Image } from '../../components'
import { Colors, Images } from '../../config'
import { ScrollView } from 'react-native'

const Nutrition = () => {
    const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sapien turpis. Donec faucibus sollicitudin venenatis. Sed quis dui in magna laoreet pretium. Suspendisse nec lorem viverra, lacinia sem at, maximus sapien. Nunc ut blandit urna, ut mollis metus. Etiam leo neque, consequat vitae ante at, porttitor congue nibh. Proin faucibus felis sit amet mollis scelerisque. Nullam fermentum erat vestibulum tellus.
\nconvallis, in semper tellus luctus. In urna ligula, vehicula ut iaculis eget, semper sit amet mi. Donec eu placerat tortor. Curabitur id sapien erat.`

const data2=[
    {
        title:'Sessions 02',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.'
    },
    {
        title:'Sessions 03',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.'
    },
    {
        title:'Sessions 04',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.'
    },
]
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <ScrollView>
                <Block
                    margin={{ Horizontal: 16, Top: 20 }}
                    backgroundColor={Colors.onPrimary}
                    padding={{ Horizontal: 10, Vertical: 12 }}
                    style={{ borderRadius: 10, height: 446 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text
                            margin={{ Top: 16, Bottom: 10 }}
                            size="H4">
                            Core Leg Exercise
                        </Text>
                        <Text
                            // lineHeight={26}
                            margin={{ Top: 0, }}
                            size="Small">
                            {data}
                        </Text>
                        <Block style={{ alignContent: 'center', justifyContent: 'center' }} flex margin={{ Vertical: 10 }}>
                            <Image source={Images.videoBackgroundImage} width={'100%'} height={120} style={{ borderRadius: 5 }} />
                            <Image source={Images.ic_play} size={52} style={{ position: 'absolute', alignSelf: 'center' }} />
                        </Block>
                        <Text
                            // lineHeight={26}
                            margin={{ Top: 0, Bottom: 48 }}
                            size="Small">
                            {data}
                        </Text>
                    </ScrollView>
                    <Block
                        row
                        backgroundColor={'#7fb6bb'}
                        padding={{ Vertical: 10, Horizontal: 90 }}
                        margin={{ Horizontal: 16, Bottom: 5 }}
                        style={{ borderRadius: 6, position: 'absolute', bottom: 0 }}
                    >
                        <Image source={Images.round_check} />
                        <Text margin={{ Left: 12 }}
                            style={{ alignSelf: 'center' }}
                            align='center'
                            color='primary'
                            font='Bold'
                            size="Body">
                            Mark as Completed
                        </Text>
                    </Block>
                </Block>
                {data2.map((item) => (
                    <Block backgroundColor={Colors.inverseOnSurface} row space='between' style={{ borderRadius: 5, marginHorizontal: 16, marginVertical: 10 }}>
                        <Block margin={{ Horizontal: 10, Vertical: 16 }} gap={4}>
                            <Text size='H6' color='secondary'>{item.title}</Text>
                            <Text size='Small' color='outline' style={{ width: 310 }} numberOfLines={1}>{item.desc}</Text>
                        </Block>
                        <Image source={Images.icon_down} style={{ alignSelf: 'center', marginRight: 12 }} />
                    </Block>
                ))}
                <Block
                    backgroundColor={Colors.primary}
                    padding={{ Vertical: 19, Horizontal: 130 }}
                    margin={{ Horizontal: 16, Top: 10 }}
                    style={{ borderRadius: 40 }}
                >
                    <Text margin={{}}
                        color='onPrimary'
                        font='Bold'
                        size="Body">
                        Download PDF
                    </Text>
                </Block>
            </ScrollView>
        </Block>
    )
}

export { Nutrition }