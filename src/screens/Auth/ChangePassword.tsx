import React from 'react';
import { Block, Button, Image, Text, TextInput, } from '../../components';
import { Colors, Images, Metrics } from '../../config';
import { AuthProps } from '.';
import { View } from 'react-native';

export const ChangePassword = (props: AuthProps<'ChangePassword'>) => {
  return (
    <Block scroll flex gradient={[Colors.onPrimary, Colors.onSecondary]}>
      <Image source={Images.LoginLogo} style={{ alignSelf: 'center', marginTop: 48, width: 80, height: 72 }} />
      <Block flex margin={{ Bottom: Metrics.iPadHeightRatio(130), Horizontal: Metrics.iPadHeightRatio(16) }}>
        <Text margin={{ Top: 18 }} size="H1" font="Bold" align='center'>
          Change Password
        </Text>
        <View style={{ marginTop: 12 }}>
          <TextInput
            // {...register({ id: "password" })}
            label="Password"
            type="Password"
            rightIcon={'icOpenEye'}
          // onRightIconPress={() => { setPasswordState(s => !s) }}
          // secureTextEntry={passwordState}
          />
          <TextInput
            // {...register({ id: "password" })}
            label="Confirm Password"
            type="ConfirmPassword"
            rightIcon={'icOpenEye'}
          // onRightIconPress={() => { setPasswordState(s => !s) }}
          // secureTextEntry={passwordState}
          />
          <Button label="Confirm" loading={undefined} onPress={() => { props.navigation.navigate("SignupSignin") }} type='Solid' />
        </View>
      </Block>
    </Block>
  );
};
