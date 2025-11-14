import {
  Animated,
  ImageStyle,
  Platform,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Colors } from "../../../../config/colors";
import { useBoolAnimation } from "../../../useBoolAnimation";
import { TextInputProps } from ".";
import { Metrics } from "../../../../config";

type InputStyleType = (
  animateOnFocus: ReturnType<typeof useBoolAnimation>,
  animateOnError: ReturnType<typeof useBoolAnimation>,
  props: TextInputProps
) => {
  shouldShowFloatingLabel: boolean;
  container: Animated.WithAnimatedObject<ViewStyle>;
  inputContainer: Animated.WithAnimatedObject<ViewStyle>;
  icon: Animated.WithAnimatedObject<ImageStyle>;
  label: Animated.WithAnimatedObject<TextStyle>;
  floatingLabel: Animated.WithAnimatedObject<TextStyle>;
  errorContainer: Animated.WithAnimatedObject<ViewStyle>;
  errorText: Animated.WithAnimatedObject<TextStyle>;
};

export const style: InputStyleType = (animateOnFocus, animateOnError) => ({
  shouldShowFloatingLabel: true,
  container: {
    borderRadius: Metrics.heightRatio(4),
    paddingTop: Metrics.heightRatio(5),
    marginTop: Metrics.heightRatio(10),
    // backgroundColor: animateOnError('#ffffff00', Colors.errorContainer),
  },
  inputContainer: {
    borderRadius: Metrics.heightRatio(10),
    minHeight: Platform.OS=='ios' ? 52 : 58,
    paddingTop: 14,
    paddingStart: Metrics.heightRatio(10),
    flexDirection: "row",
    marginVertical: 6,
    maxHeight: Metrics.heightRatio(52),
    height: Metrics.heightRatio(52),
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: animateOnFocus("transparent", "transparent"),
    borderColor: animateOnFocus(Colors.outlineVariant, Colors.primary),
  },
  icon: {
    // tintColor: animateOnFocus(Colors.primary, Colors.outlineVariant),
    resizeMode: "center",
    marginTop: 0,
    margin: 12,
    height: 25,
    width: 25,
  },
  label: {
    color: animateOnFocus(Colors.primary, Colors.outlineVariant),
  },
  floatingLabel: {
    position: "absolute",
    paddingRight: 5,
    paddingLeft: 5,
    // alignSelf: "center",
    // backgroundColor: animateOnFocus("transparent", "transparent"),
    top:
      Platform.OS == "android"
        ? animateOnFocus(2, -22)
        : animateOnFocus(0, -22),
    left:
      Platform.OS == "android" ? animateOnFocus(0, -2) : animateOnFocus(0, -5),
    fontSize: animateOnFocus(17, 12),
    color: animateOnFocus(Colors.outlineVariant, Colors.primary),
    backgroundColor: animateOnFocus("transparent", Colors.textInputLabel),
  },
  errorContainer: {},
  errorText: { color: "red" },
});

const EMPTY = (label: string, value: string) =>
  value.length < 3 && label + " is required";
export const InputTypes = Object.freeze({
  Text: {
    validate: (label: string, value: string, form: any) =>
      [EMPTY(label, value)].filter((s) => !!s),
  },
  Email: {
    validate: (label: string, value: string, form: any) =>
      [
        EMPTY(label, value),
        !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) &&
          label + " is not valid",
      ].filter((s) => !!s),
  },
  Password: {
    validate: (label: string, value: string, form: any) =>
      [
        EMPTY(label, value),
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
          value
        ) && label + " is easy",
      ].filter((s) => !!s),
  },
  ConfirmPassword: {
    validate: (label: string, value: string, form: any) =>
      [
        EMPTY(label, value),
        form.password != value && "Password Does Not Match!",
      ].filter((s) => !!s),
  },
  Number: {
    validate: (label: string, value: string, form: any) =>
      [EMPTY(label, value)].filter((s) => !!s),
  },
  Decimal: {
    validate: (label: string, value: string, form: any) =>
      [EMPTY(label, value)].filter((s) => !!s),
  },
  Memo: {
    validate: (label: string, value: string, form: any) =>
      [EMPTY(label, value)].filter((s) => !!s),
  },
});
