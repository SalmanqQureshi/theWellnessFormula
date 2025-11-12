import { MotiView } from 'moti'
import React from 'react'
import { ImageSourcePropType, Pressable, StyleSheet } from 'react-native'
import { Block } from '../Layout'
import { Image } from '../Image'
import { Text } from '../Text'
import { Colors, Metrics } from '../../config'

interface ProjectFolderItemsProps{
    index?:number,
    name:string,
    Icons?:ImageSourcePropType
    Images:ImageSourcePropType,
    onPress?:()=>{}
}
export const ProjectFolderItems = ({index,Images,onPress,Icons,name}:ProjectFolderItemsProps) => {
  return (
    <MotiView
              key={index}
              from={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 100 + index * 200 }}>
              <Pressable
                style={{ marginTop: 10, marginHorizontal: Metrics.iPadHeightRatio(16) }}
                onPress={onPress}>
                <Block row style={styles.CardContainer}>
                  <Image source={Images} size={24} />
                  <Text
                    font="Medium"
                    size="H6"
                    color='textColors'
                    margin={{ Left: 15 }}>
                    {name}
                  </Text>
                  <Block flex align='right'>
                    <Image source={Icons} style={{ flex: 1, height: 24, width: 24, tintColor: Colors.lightTextColor }} />
                  </Block>
                </Block>
              </Pressable>
            </MotiView>
  )
}

// export default ProjectFolderItems
// <MotiView
            //   key={index}
            //   from={{ opacity: 0, translateY: 50 }}
            //   animate={{ opacity: 1, translateY: 0 }}
            //   transition={{ delay: 100 + index * 200 }}>
            //   <Pressable
            //     style={{ marginTop: 10, marginHorizontal: 12 }}
            //     onPress={() => props.navigation.navigate('ProjectDetailFolder', { ScreenTitle: item.name })}>
            //     <Block row style={styles.CardContainer}>
            //       <Image source={Images.icFolder} size={24} />
            //       <Text
            //         font="Medium"
            //         size="H6"
            //         color='textColors'
            //         margin={{ Left: 15 }}>
            //         {item.name}
            //       </Text>
            //       <Block flex align='right'>
            //         <Image source={Icons.arrowRight} style={{ flex: 1, height: 24, width: 24, tintColor: Colors.lightTextColor }} />
            //       </Block>
            //     </Block>
            //   </Pressable>
            // </MotiView>
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: Colors.onSecondary,
      padding: 12,
    },
    CardContainer: {
      margin: 0,
      alignItems: 'center',
      backgroundColor: Colors.onPrimary,
      padding: 18,
      borderRadius: 10
    },})