import React from 'react'
import { Block, FlatList, Image, Text } from '../../components'
// import { MotiView } from 'moti'
import { Pressable, StyleSheet, View } from 'react-native'
import { Colors, Icons, Images, Metrics } from '../../config'
import { MainStackProps } from '.'
export const AboutUs = (props: MainStackProps<'AboutUs'>) => {


  props.navigation.setOptions({
    headerTitle: () => (<Text size="H4" font="SemiBold" align='left'>{props.route.params?.title}</Text>),
    headerTitleStyle: { alignSelf: 'flex-start' }
  })

  const data = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.`
  const data2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting.`
  return (
    <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]} >
      <Text
        color="primary"
        margin={{ Top: 32, Horizontal: 20, Bottom: 10 }}
        size="H4">
        Lorem Ipsum is simply
      </Text>
      <Text
        lineHeight={26}
        margin={{ Top: 0, Horizontal: 20, Bottom: 12 }}
        size="H6">
        {data}
      </Text>
      <Text
        color="primary"
        margin={{ Top: 16, Horizontal: 20, Bottom: 10 }}
        size="H4">
        Lorem Ipsum is simply
      </Text>
      <Text
        lineHeight={26}
        margin={{ Top: 0, Horizontal: 20, Bottom: 12 }}
        size="H6">
        {data2}
      </Text>
    </Block>
  )
}
const styles = StyleSheet.create({
  avatar: {
    height: 126,
    width: 126,
    resizeMode: 'cover',
    borderRadius: 50,
    alignSelf: 'center',
  },
  CardContainer: {
    margin: 0,
    alignItems: 'center',
    backgroundColor: Colors.onPrimary,
    padding: 18,
    borderRadius: 10,
    marginHorizontal: Metrics.iPadHeightRatio(18)
  },
});
