import { Animated, TextStyle, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { ErrorTextType } from './useForm';
import { Colors, Fonts, Metrics } from '../../config';
import { useBoolAnimation } from '../useBoolAnimation';

interface Props extends PropsWithChildren {
  isError: boolean;
  ErrorText: ErrorTextType;
  animateOnError: ReturnType<typeof useBoolAnimation>
  style?: ViewStyle;
}
type FormComponentContainerStyleType = (
  animateOnError: ReturnType<typeof useBoolAnimation>,
) => {
  container: Animated.WithAnimatedObject<ViewStyle>;
  errorContainer: Animated.WithAnimatedObject<ViewStyle>;
  errorText: Animated.WithAnimatedObject<TextStyle>;
};

export const FormComponentContainer = ({ ErrorText = [""], ...props }: Props) => {
  const styles = style(props.animateOnError, ErrorText[0]?.length < 120);
  return (
    <Animated.View style={{ ...styles.container, ...props.style }}>
      {props.children}
      <Animated.View style={styles.errorContainer}>
        {!!props.isError && (
          <Animated.Text style={styles.errorText}>
            {ErrorText[0]}
          </Animated.Text>
        )}
      </Animated.View>
    </Animated.View>
  );
};

const style: FormComponentContainerStyleType = (animateOnError, LongError) => ({
  container: {
    borderRadius: 4,
    padding: 2,
    // marginTop: 5,
    flex: 1,
    // backgroundColor: animateOnError('#ffffff00', Colors.background),
  },
  errorContainer: {
    // justifyContent: "center",
    marginHorizontal: 10,
    flex: 1,
    width: "100%",
    height: animateOnError(0, LongError ? 34 : 62)
  },
  errorText: {
    // ...Fonts.MediumFont(),
    fontSize: 12,
    color: Colors.error,
    flex: 1,
    height: 20,
    width: "100%",
    flexWrap: "wrap",
    marginTop: Metrics.widthRatio(12)
  },
});
