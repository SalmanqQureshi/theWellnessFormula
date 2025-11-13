import React from 'react'
import { Block, Button, Image } from '../../components'
import { Colors, Images, Metrics } from '../../config'
import { AuthProps } from '.'
import { View } from 'react-native'

const StartScreen = (props: AuthProps<"StartScreen">) => {
    return (
        <Block flex scroll gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Block style={{ justifyContent: 'center' }} flex>
                <Image source={Images.LoginLogo} style={{ alignSelf: 'center', position: 'absolute' }} />
            </Block>
            <Block>
                <Block style={{ bottom: 180, width: 133, alignSelf: 'center',backgroundColor:'red' }}>
                <Button 
                label="Get Started" 
                onPress={() => props.navigation.navigate('IntroScreen')} 
                type='Solid' 
                style={{backgroundColor:'red' }} />
                </Block>
            </Block>
        </Block>
    )
}

export { StartScreen }