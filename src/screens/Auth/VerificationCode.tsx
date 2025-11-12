import React from 'react';
import { Block, Button, Image, Text, TextInput, } from '../../components';
import { Colors, Images, Metrics } from '../../config';
import { AuthProps } from '.';
import { View } from 'react-native';

export const VerificationCode = (props: AuthProps<'VerificationCode'>) => {
    return (
        <Block scroll flex gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Image source={Images.LoginLogo} style={{ alignSelf: 'center', marginTop: 48, width: 80, height: 72 }} />
            <Block flex margin={{ Bottom: Metrics.iPadHeightRatio(130), Horizontal: Metrics.iPadHeightRatio(16) }}>
                <Text margin={{ Top: 18 }} size="H1" font="Bold" align='center'>
                    Change Password
                </Text>
                <View style={{ marginTop: 12 }}>
                    {/* <TextInput label="Email Address" type="Email" keyboardType='email-address' rightIcon='ic_mega_email' /> */}
                    <Image source={Images.Otp_image} style={{ alignSelf: 'center', marginTop: 48, }} />
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
