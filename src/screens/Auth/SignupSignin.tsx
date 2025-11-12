import React, { useState } from 'react'
import { AnimatedTab, Block, Image } from '../../components'
import { Text } from 'react-native'
import { SignIn } from './SignIn'
import { AuthProps } from '.'
import { Colors, Images } from '../../config'
import { Forgot } from './Forgot'
import { SignUp } from './SignUp'

const SignupSignin = (props: AuthProps<'SignupSignin'>) => {
    const [Tabs, setTab] = useState(1);
    return (
        <>
            <Block flex safe scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
                <Image source={Images.LoginLogo} style={{ alignSelf: 'center', marginTop: 48, width: 80, height: 72 }} />
                <Block margin={{ Horizontal: 16 }}>
                    <AnimatedTab value={Tabs} onChange={(d: any) => { setTab(d) }} options={[
                        { label: 'Login', id: 1 },
                        { label: 'Register', id: 2 },
                    ]} />
                </Block>
                {Tabs === 1 ?
                    <SignIn /> :
                    <SignUp />
                }
            </Block>
        </>
    )
}

export { SignupSignin }