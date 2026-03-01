import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, ChipInputButton, Text, TextInput } from '../../../src/components';
import { useAuth } from '../../ContextService/useAuth';

const Signin = () => {
  const [passwordState, setPasswordState] = useState(false);
  const {login} = useAuth()
  return (
    <View>
      <TextInput
        // {...register({ id: 'email', next: 'password' })}
        label="Email Address"
        type="Email"
        keyboardType="email-address"
        rightIcon={'ic_mega_email'}
      />
      <TextInput
        // {...register({ id: 'password' })}
        label="Password"
        type="Password"
        rightIcon={passwordState ? 'icOpenEye' : 'icOPenEye'}
        onRightIconPress={() => {
          setPasswordState(s => !s);
        }}
        secureTextEntry={passwordState}
      />
      <Button
      label="Login" 
      onPress={() => login({ isLoggedIn: true })} 
      type='Solid' 
      style={{ marginTop: -24 }} 
    //   loading={loading} /
      />
      {/* <ChipInputButton
        label={'name'}
        onChangeText={text => {
          setChipValue(text1 => {
            if (text?.includes(',' || ' ')) text1?.push(text);
          });
          console.log('text', text);
        }}
        onSubmit={() => {
          setChipValue(text1 => {
            if (text1?.includes(',' || ' ')) text1?.push(text1);
          });
        }}
        value={chipValue}
        chipText={}
      /> */}
    </View>
  );
};

export { Signin };
