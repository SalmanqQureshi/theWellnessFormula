import React from 'react'
import { Block, Button, Form, Image, Text, TextInput } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { Colors, Images, Metrics } from '../../config'
import { View } from 'react-native'
import { navigate } from '../../services'
import { MainStackProps } from '.'

export const ChangePasswod = (props: MainStackProps<'ChangePasswod'>) => {
    const { goBack } = useNavigation()
    return (
        <Block scroll flex gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Image source={Images.LoginLogo} style={{ alignSelf: 'center', marginTop: 48, width: 80, height: 72 }} />
            <Block flex margin={{ Bottom: Metrics.iPadHeightRatio(120), Horizontal: Metrics.iPadHeightRatio(16) }}>
                <Text margin={{ Top: 18 }} size="H1" font="Bold" align='center'>
                    Change Password
                </Text>
                <View style={{ marginTop: 12 }}>
                    <TextInput
                        // {...register({ id: "password" })}
                        label="Current Password"
                        type="Password"
                        rightIcon={'icOpenEye'}
                    // onRightIconPress={() => { setPasswordState(s => !s) }}
                    // secureTextEntry={passwordState}
                    />
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
                    <Button label="Confirm" loading={undefined} onPress={() => { goBack() }} type='Solid' />
                    <Text margin={{ Top: 30 }} font="Bold" align='center' color='primary' onPress={() => (goBack())}>Go Back</Text>
                </View>
            </Block>
        </Block>
    )
}
