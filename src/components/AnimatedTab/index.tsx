import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Block } from '../Layout';
import { Colors } from '../../config/colors';
import { Text } from '../Text';
import { Sizes } from '../../config/size';

type Option = { id: number | string; label: string };

type AnimatedTabProps = {
  options: Option[];
  value: number | string;
  onChange: (value: number | string) => any;
};

export const AnimatedTab = ({ options, value, onChange }: AnimatedTabProps) => {
  // Find selected tab index
  const selectedIndex = options.findIndex(opt => opt.id === value);

  // Animated value for indicator position (left)
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const tabWidthPercent = 100 / options.length;
    const newLeftPercent = tabWidthPercent * selectedIndex;

    // Animate to new position smoothly
    Animated.timing(translateX, {
      toValue: newLeftPercent,
      duration: 250,
      useNativeDriver: false, // position left uses layout, so false
    }).start();
  }, [selectedIndex, options.length, translateX]);

  return (
    <View
      // flex
      height={Sizes.Controls.height - 30}
      backgroundColor="transparent"
      style={[styles.container, {}]}
    // gradient={[Colors.onPrimary, Colors.onSecondary]}
    // margin={{ Horizontal: 0 }}
    // padding={{ Horizontal: 0 }}
    // shadow
    >
      {/* Animated Sliding Indicator */}
      <Animated.View
        style={[
          styles.slider,
          {
            width: `${100 / options.length - 4}%`,
            left: translateX.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />

      {/* Tabs */}
      {options.map(option => {
        const isSelected = option.id === value;

        return (
          <TouchableOpacity
            key={'AnimatedTabsOption-' + option.id}
            style={styles.tab}
            activeOpacity={0.7}
            onPress={() => onChange(option.id)}
          >
            <Block flex style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <Text
                size="H3"
                // color={isSelected ? 'primary' : 'onPrimary'}
                font="Medium"
                style={{ color: isSelected ? Colors.onPrimary : Colors.textBackground, }}
              >
                {option.label}
              </Text>
            </Block>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 46,
    borderColor: Colors.primary,
    borderWidth: 0.25,
    height: Sizes.Controls.height + 6,
    alignItems: 'center'
  },
  slider: {
    position: 'absolute',
    height: Sizes.Button.height - 8,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 6,

  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
