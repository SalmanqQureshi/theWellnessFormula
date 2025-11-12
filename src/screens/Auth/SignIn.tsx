import React, { useEffect, useState } from 'react';
import { Block, Text, Button, TextInput, useAuth, Form, Image, CheckBox } from '../../components';
import { AuthProps } from '.';
import { Colors, Images, Metrics } from '../../config';
import { ActivityIndicator, Platform, ScrollView, View } from 'react-native';
import { request } from '../../components/ApiService';
import { useNavigation } from '@react-navigation/native';
export const SignIn = () => {
  const { logIn } = useAuth()
  const { navigate } = useNavigation()
  const [passwordState, setPasswordState] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      <ActivityIndicator color={Colors.error} size={'large'} />
    }, 20000);
  }, [false])

  return (
    // <Block safe flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
    <ScrollView>
      <Form onSubmit={(data) =>
        logIn({ isLoggedIn: true })}>
        {({ register, submit, loading }) => (
          <Block style={{ flexGrow: 1 }} flex >
            {/* <Image source={Images.LoginLogo} style={{ alignSelf: 'center', marginTop: Metrics.iPadHeightRatio(70), }} /> */}
            <Block flex align="bottom" margin={{ Bottom: Metrics.iPadHeightRatio(40), Horizontal: Metrics.iPadHeightRatio(16) }}>
              {/* <Text margin={{ Top: 18 }} size="H1" font="Medium">
              Welcome!
            </Text> */}
              <TextInput {...register({ id: "email", next: "password" })} label="Email Address" type="Email" keyboardType='email-address' rightIcon={'ic_mega_email'} />
              <TextInput
                {...register({ id: "password" })}
                label="Password"
                type="Password"
                rightIcon={passwordState ? 'icOpenEye' : 'icOPenEye'}
                onRightIconPress={() => { setPasswordState(s => !s) }}
                secureTextEntry={passwordState}
              />
              <Block row margin={{ Top: 6 }}>
                <CheckBox
                  {...register({ id: 'Terms_Conditions' })}
                  required={true}
                  errorText="Please agree to our Terms & Conditions"
                  text="Remember Me"

                  onHighlightedPress={() => navigate('TermsCondition')}
                />
                <Text
                  // margin={{ Top: 20 }}
                  // lineHeight={50}
                  font="Medium"
                  size='H6'
                  onPress={() => navigate("Forgot")}
                  color={'secondary'}
                  align="center">
                  Forgot Password?
                </Text>
              </Block>
              <Button label="Login" onPress={() => logIn({ isLoggedIn: true })} type='Solid' style={{ marginTop: -24 }} loading={loading} />
              <View
                style={{
                  width: '100%',
                  borderColor: Colors.textBackground,
                  borderWidth: 1,
                  marginTop: 150
                }}
              />
              <Text
                // margin={{ Top: 20 }}
                // lineHeight={50}
                style={{ bottom: 10, backgroundColor: Colors.onSecondary, width: 50, alignSelf: 'center' }}
                font="Medium"
                size='H6'
                onPress={() => { }}
                color={'secondary'}
                align="center">
                OR
              </Text>
              <Block row align='center' gap={12}>
                <Image source={Images.social_google} style={{}} />
                <Image source={Images.social_apple} style={{}} />
                <Image source={Images.social_facebook} style={{}} />
              </Block>
              <View style={{
                width: '100%',
                borderColor: Colors.secondary,
                borderWidth: 1,
                marginTop: 36,
                borderRadius: 10,
                // padding: 15
              }}>
                <Text color='secondary' align='center' padding={{ Vertical: 0 }} size='Body' style={{ paddingVertical: 15 }}>Login as guest</Text>
              </View>
            </Block>
          </Block>
        )}
      </Form>
    </ScrollView>
    // </Block>

  );
};
