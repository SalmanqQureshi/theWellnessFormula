import React, { useRef, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Block, Button, Image, Text } from '../../components'
import { Colors, Images } from '../../config'
import { AuthProps } from '.'

const { width, height } = Dimensions.get('window')

const ScreenData = [
    {
        title: 'Welcome to The Wellness Formula',
        image: Images.StartScreen1,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales ipsum molestie augue semper, a fermentum felis mollis. In tincidunt est nibh, ut iaculis augue suscipit in. Etiam sem augue, laoreet at lacus et, placerat placerat ipsum. Nam consequat.'
    },
    {
        title: 'Discover foods that fuel your body.',
        image: Images.StartScreen2,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales ipsum molestie augue semper, a fermentum felis mollis. In tincidunt est nibh, ut iaculis augue suscipit in. Etiam sem augue, laoreet at lacus et, placerat placerat ipsum. Nam consequat.'
    },
    {
        title: 'Exercise routines tailored to your lifestyle.',
        image: Images.StartScreen3,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales ipsum molestie augue semper, a fermentum felis mollis. In tincidunt est nibh, ut iaculis augue suscipit in. Etiam sem augue, laoreet at lacus et, placerat placerat ipsum. Nam consequat.'
    }
]

const IntroScreen = (props: AuthProps<'IntroScreen'>) => {
    const scrollRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        const nextIndex = currentIndex + 1
        if (nextIndex < ScreenData.length) {
            scrollRef?.current?.scrollTo({ x: nextIndex * width, animated: true })
            setCurrentIndex(nextIndex)
        }
    }

    const onScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x
        const newIndex = Math.round(offsetX / width)
        setCurrentIndex(newIndex)
    }
    return (
        <Block scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]} >
            {/* <SafeAreaView style={{}}> */}
            <View style={styles.logoContainer}>
                <Image source={Images.LoginLogo} style={styles.logo} />
            </View>

            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                {ScreenData.map((data, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={data.image} style={styles.image} />
                        <Text size={'H2'} font='Bold' style={styles.title}>
                            {data.title}
                        </Text>
                        <Text size={'H6'} color={'textBackground'} font='Regular'>
                            {data.desc}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            {/* </SafeAreaView> */}
            <Block flex row style={styles.buttonContainer}>
                <Text size={'H4'} color={'textBackground'} style={{ alignSelf: 'center' }}>{`${currentIndex + 1}/3`}</Text>
                <Button label="Next"
                    onPress={() => { currentIndex < ScreenData.length - 1 ? handleNext() : props.navigation.navigate('SignupSignin') }}
                    style={{ width: 100, alignSelf: 'flex-end' }} />
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({

    buttonContainer: {
        paddingHorizontal: 16,
        // marginBottom: 100,
        // alignItems: 'flex-end',
    },
    button: {
        // backgroundColor: Colors.primary, // Use your theme's primary color
        // paddingVertical: 12,
        // paddingHorizontal: 40,
        // borderRadius: 8,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 48,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    scrollContainer: {
        // Make sure the container can scroll horizontally
    },
    slide: {
        width: width,
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 410,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        marginBottom: 10,
    }
})

export { IntroScreen }
