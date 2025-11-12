import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  ViewProps,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Images, Metrics, Sizes } from '../../config';
import { MarginPaddingType, getMarginPadding } from '../getMarginPadding';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from '../Image';
// import { MotiView } from 'moti';
interface BlockProps extends ViewProps {
  row?: boolean;
  scroll?: boolean;
  card?: boolean;
  safe?: boolean;
  shadow?: boolean;
  fluid?: boolean;
  flex?: boolean;
  backgroundColor?: string;
  align?: 'center' | 'left' | 'right' | 'middle' | 'top' | 'bottom';
  space?: 'between' | 'evenly' | 'around';
  onPress?: () => any;
  margin?: MarginPaddingType;
  padding?: MarginPaddingType;
  height?: number | `${number}%`;
  width?: number | `${number}%`;
  shadowColor?: string;
  page?: boolean;
  gradient?: [string, string],
  scrollGradient?: boolean,
  moti?: boolean;
  gap?: number
}

export function Block(props: BlockProps) {
  const {
    row,
    card,
    safe,
    shadow,
    fluid,
    shadowColor,
    flex,
    space,
    height,
    width,
    gradient,
    scrollGradient,
    gap,
    style: givinStyle,
    ...rest
  } = props;
  //@ts-ignore
  const style = [
    styles.block,
    !!props.page && styles.page,
    !!row && styles.row,
    !!props.align && styles[props.align],
    space && { justifyContent: `space-${props.space}` },
    card && styles.card,
    shadow && styles.shadow,
    fluid && styles.fluid,
    flex && { flex: !!flex ? 1 : flex },
    height && { height },
    width && { width },
    gap && { gap },
    shadowColor && { shadowColor: props.shadowColor },
    !!props.backgroundColor && { backgroundColor: props.backgroundColor },
    !!givinStyle && givinStyle,
    !!props.padding && getMarginPadding(props.padding, 'padding'),
    !!props.margin && getMarginPadding(props.margin, 'margin'),
  ].filter(s => !!s);

  if (!!props.scroll || !!props.page) {
    return (
      <ScrollView
        bounces={false}
        contentContainerStyle={style}
        showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={!props.page}
        style={[
          { flex: 1 },
          !!props.page && { backgroundColor: Colors.background },
        ]}
        {...rest}>
        <LinearGradient pointerEvents='box-none' style={style} colors={gradient} {...rest} start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Image source={Images.backgroundScreen} style={{ position: 'absolute' }} />
          {props.children}
        </LinearGradient>
      </ScrollView>
    );
  }
  if (!!gradient) {
    return (
      <LinearGradient pointerEvents='box-none' style={style} colors={gradient} {...rest}>
        {props.children}
      </LinearGradient>)
  }
  if (!!props.moti) {
    return (
      <View style={style} {...rest}>
        {props.children}
      </View>
    );
  }
  if (!!props.safe) {
    return (
      <SafeAreaView style={style} {...rest}>
        <LinearGradient pointerEvents='box-none' style={style} colors={gradient} {...rest} start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <Image source={Images.LoginLogo} style={{ position: 'absolute' }} />
          {props.children}
        </LinearGradient>
      </SafeAreaView>
    );
  }
  if (!!props.onPress) {
    return (
      <Pressable style={style} {...rest}>
        {props.children}
      </Pressable>
    );
  }

  return (
    <View style={style} {...rest}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  page: {
    padding: Sizes.Base,
    backgroundColor: Colors.background,
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  card: {
    ...Sizes.Card,
    borderColor: Colors.onBackground,
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  fluid: {
    width: 'auto',
  },
});
