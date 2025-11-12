import React from 'react'
import { Block, FlatList, Image, Text } from '../../../components'
// import { MotiView } from 'moti'
import { Pressable, StyleSheet, View } from 'react-native'
import { Colors, Images, Metrics } from '../../../config'
import { TabProps } from '.';

export const Notifications = (props: TabProps<any>) => {
  return (
    <Block safe style={{ flex: 1, }} gradient={[Colors.background, Colors.textBackground]}>
      <FlatList
        contentContainerStyle={{ paddingTop: 12, marginHorizontal: Metrics.iPadHeightRatio(16) }}
        data={Array(4)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View
            key={index}
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 100 + index * 200 }}>
            <Pressable
              style={{ marginTop: 10 }}
              onPress={() => null}>
              <Block row style={styles.CardContainer}>
                <Text
                  font="Medium"
                  size="H6"
                  color='textColors'>
                  Simon has just assigned you a project
                </Text>
              </Block>
            </Pressable>
          </View>
        )} />
    </Block>)
}
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
  },
});