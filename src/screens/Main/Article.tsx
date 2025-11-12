import React from 'react'
import { Block, Image, Text } from '../../components'
import { Colors, Images } from '../../config'
import { ScrollView } from 'react-native'
import { MainStackProps } from '.'

const Article = (props: MainStackProps<'Article'>) => {

  props.navigation.setOptions({
    headerRight: () => (<Image source={Images.image_save} />),
    headerTitle: () => (<Text size="H4" font="SemiBold" align='left' style={{ textAlign: 'left', flex: 1, marginLeft: 16 }}>Core leg exercise</Text>)
  })
  const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sapien turpis. Donec faucibus sollicitudin venenatis. Sed quis dui in magna laoreet pretium. Suspendisse nec lorem viverra, lacinia sem at, maximus sapien. Nunc ut blandit urna, ut mollis metus. Etiam leo neque, consequat vitae ante at, porttitor congue nibh. Proin faucibus felis sit amet mollis scelerisque. Nullam fermentum erat vestibulum tellus 
convallis, in semper tellus luctus. In urna ligula, vehicula ut iaculis eget, semper sit amet mi. Donec eu placerat tortor. Curabitur id sapien erat.
\n 
Pellentesque rhoncus, orci eu mollis fringilla, augue nulla rutrum ligula, a varius orci tellus sed sapien. Praesent eget dictum justo. Ut faucibus lacus purus, id suscipit ante rhoncus at. Vestibulum a sagittis metus, sed mollis eros. Nunc rhoncus rutrum laoreet. Curabitur nisl nibh, laoreet non dapibus vel, finibus id turpis. Etiam malesuada congue urna, vitae blandit tellus hendrerit tempor. Maecenas vehicula placerat turpis et sollicitudin. Mauris pulvinar, turpis a volutpat molestie, sem magna tincidunt quam, sed cursus justo purus ac est.
\n
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut eu maximus ante, vel tincidunt dui. Praesent quis efficitur lorem. Pellentesque at ligula at augue sollicitudin tempus. Nulla pretium, felis eget luctus ultricies, ante mauris mattis purus, eget malesuada nunc nulla in purus. Donec sollicitudin tellus massa, congue elementum est semper nec. Suspendisse malesuada, est ut ultricies bibendum, dolor enim aliquam diam, non maximus est felis sed est. Fusce at nunc ut neque auctor elementum. Suspendisse finibus tortor vitae imperdiet bibendum.
\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sapien turpis. Donec faucibus sollicitudin venenatis. Sed quis dui in magna laoreet pretium. Suspendisse nec lorem viverra, lacinia sem at, maximus sapien. Nunc ut blandit urna, ut mollis metus. Etiam leo neque, consequat vitae ante at, porttitor congue nibh. Proin faucibus felis sit amet mollis scelerisque. Nullam fermentum erat vestibulum tellus 
convallis, in semper tellus luctus. In urna ligula, vehicula ut iaculis eget, semper sit amet mi. Donec eu placerat tortor. Curabitur id sapien erat.
\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sapien turpis. Donec faucibus sollicitudin venenatis. Sed quis dui in magna laoreet pretium. Suspendisse nec lorem viverra, lacinia sem at, maximus sapien. Nunc ut blandit urna, ut mollis metus. Etiam leo neque, consequat vitae ante at, porttitor congue nibh. Proin faucibus felis sit amet mollis scelerisque. Nullam fermentum erat vestibulum tellus 
convallis, in semper tellus luctus. In urna ligula, vehicula ut iaculis eget, semper sit amet mi. Donec eu placerat tortor. Curabitur id sapien erat.
`
  return (
    <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
      <Block
        margin={{ Horizontal: 16, Top: 20 }}
        backgroundColor={Colors.onPrimary}
        padding={{ Horizontal: 10, Vertical: 12 }}
        style={{ borderRadius: 10, height: 641 }}>
        <Image source={Images.ic_exercise3} width={'100%'} height={160} resizeMode='stretch' />
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
        </ScrollView>
      </Block>
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
    </Block>
  )
}

export { Article }