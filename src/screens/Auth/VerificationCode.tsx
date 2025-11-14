import React, { useEffect, useState } from 'react';
import { Block, Button, Image, Text, TextInput, } from '../../components';
import { Colors, Fonts, Images, Metrics } from '../../config';
import { AuthProps } from '.';
import { View } from 'react-native';
import {OtpInput,OtpInputProps} from 'react-native-otp-entry'
export const VerificationCode = (props: AuthProps<'VerificationCode'>) => {
    const [timeState,setTimeState] = useState('00:59')
    useEffect(() => {
    const interval = setInterval(() => {
      setTimeState(prev => {
        // Split minutes and seconds
        let [min, sec] = prev.split(":").map(Number);

        if (min === 0 && sec === 0) {
          clearInterval(interval);
          return "00:00";
        }

        if (sec === 0) {
          min -= 1;
          sec = 59;
        } else {
          sec -= 1;
        }

        const formattedMin = String(min).padStart(2, "0");
        const formattedSec = String(sec).padStart(2, "0");
        return `${formattedMin}:${formattedSec}`;
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);
    // useEffect(()=>{
    //     const intervel =setInterval(() => {
    //         setTimeState(pre=>{
    //             const [min, sec] = pre.split(":").map(Number)
    //             // (s.slice(3,5)-1)
    //         })
    //     }, 1000);

    //     ()=>{clearImmediate(intervel)}
    // })
    return (
        <Block scroll flex gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Image source={Images.LoginLogo} style={{ alignSelf: 'center', marginTop: 48, width: 80, height: 72 }} />
            <Block flex margin={{ Bottom: Metrics.iPadHeightRatio(130), Horizontal: Metrics.iPadHeightRatio(16) }}>
                <Text margin={{ Top: 18 }} size="H1" font="BoldItalic" align='center'>
                    Change Password
                </Text>
                <View style={{ marginTop: 12 }}>
                    {/* <TextInput label="Email Address" type="Email" keyboardType='email-address' rightIcon='ic_mega_email' /> */}
                    {/* <Image source={Images.Otp_image} style={{ alignSelf: 'center', marginTop: 48, }} /> */}
                    <OtpInput 
                    numberOfDigits={6} 
                    onTextChange={(input)=>{console.log('input',input)}}
                    onFilled={()=>{alert(console.log('this is completed'))}}
                    theme={{
                      containerStyle:{
                        marginTop: 48,
                      },
                      pinCodeContainerStyle:{
                        borderColor:Colors.primary,
                        borderWidth:0,
                        borderBottomWidth:1,
                        width:60,
                      },
                      pinCodeTextStyle:{
                        fontFamily: Fonts.BoldItalic
                      }
                    }}
                    />
                    <Text
                        lineHeight={0}
                        font="Medium"
                        size='H6'
                        onPress={() => props.navigation.goBack()}
                        color={'primary'}
                        margin={{ Top: 0 }}
                        align="center">
                        A Code has been sent to your phone
                    </Text>
                    <Text
                        lineHeight={0}
                        font="Medium"
                        size='H6'
                        onPress={() => props.navigation.goBack()}
                        color={'primary'}
                        margin={{ Top: 0 }}
                        align="center">
                        Resend in {timeState}
                    </Text>
                    <Button label="Confirm" loading={undefined} onPress={() => { props.navigation.navigate("ChangePassword") }} type='Solid' />
                    <Text
                        lineHeight={50}
                        font="Medium"
                        size='H6'
                        onPress={() => props.navigation.goBack()}
                        color={'primary'}
                        margin={{ Top: 48 }}
                        align="center">
                        Go Back
                    </Text>
                </View>
            </Block>
        </Block>
    );
};
