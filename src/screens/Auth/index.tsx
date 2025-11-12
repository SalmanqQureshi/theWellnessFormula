import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignIn, Forgot, SignUp, StartScreen, IntroScreen, SignupSignin, VerificationCode, ChangePassword } from './_FileGroup';

type AuthStackType = {
  SignIn: undefined;
  SignUp: undefined;
  Forgot: undefined;
  StartScreen: undefined;
  IntroScreen: undefined;
  SignupSignin: undefined;
  VerificationCode: undefined;
  ChangePassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackType>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true, headerTitle: '', headerShown: false }}>
      <Stack.Screen component={StartScreen} name="StartScreen" />
      <Stack.Screen component={IntroScreen} name="IntroScreen" />
      <Stack.Screen component={SignIn} name="SignIn" />
      <Stack.Screen component={SignUp} name="SignUp" />
      <Stack.Screen component={Forgot} name="Forgot" />
      <Stack.Screen component={SignupSignin} name="SignupSignin" />
      <Stack.Screen component={VerificationCode} name="VerificationCode" />
      <Stack.Screen component={ChangePassword} name="ChangePassword" />
    </Stack.Navigator>
  );
};

export type AuthProps<ScreenName extends keyof AuthStackType> =
  NativeStackScreenProps<AuthStackType, ScreenName>;
