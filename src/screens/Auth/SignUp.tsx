import React, { useEffect, useState } from 'react';
import { Block, Text, Button, TextInput, useAuth, Form, Image, CheckBox } from '../../components';
import { AuthProps } from '.';
import { Colors, Images, Metrics } from '../../config';
import { ActivityIndicator, Platform, ScrollView, View } from 'react-native';
import { request } from '../../components/ApiService';
export const SignUp = () => {
  const { logIn } = useAuth()
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
              <TextInput {...register({ id: "email", next: "password" })} label="Name" type="Email" keyboardType='ascii-capable' rightIcon={'ic_user'} />
              <TextInput {...register({ id: "email", next: "password" })} label="Email Address" type="Email" keyboardType='email-address' rightIcon={'ic_mega_email'} />
              <TextInput {...register({ id: "email", next: "password" })} label="Phone Number" type="Email" keyboardType='phone-pad' rightIcon={'ic_phone'} />
              <TextInput
                {...register({ id: "password" })}
                label="Password"
                type="Password"
                rightIcon={passwordState ? 'icOpenEye' : 'icOPenEye'}
                onRightIconPress={() => { setPasswordState(s => !s) }}
                secureTextEntry={passwordState}
              />
              <TextInput
                {...register({ id: "password" })}
                label="Confirm Password"
                type="ConfirmPassword"
                rightIcon={passwordState ? 'icOpenEye' : 'icOPenEye'}
                onRightIconPress={() => { setPasswordState(s => !s) }}
                secureTextEntry={passwordState}
              />
              <Block row margin={{ Top: 6 }}>
                <CheckBox
                  highlightedText='terms and conditions '
                  highlightedText2='privacy Policy '
                  {...register({ id: 'Terms_Conditions' })}
                  required={false}
                  onPress={() => { }}
                  errorText="Please agree to our Terms & Conditions"
                  text={"Accept the "}
                  onHighlightedPress={() => navigate('TermsCondition')}
                />
              </Block>
              <Button label="Register" onPress={() => alert('submit()')} type='Solid' style={{ marginTop: -24 }} loading={loading} />
              <View
                style={{
                  width: '100%',
                  borderColor: Colors.textBackground,
                  borderWidth: 1,
                  marginTop: 36
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
            </Block>
          </Block>
        )}
      </Form>
    </ScrollView>
    // </Block>

  );
};
