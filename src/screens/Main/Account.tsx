import React, { useEffect } from 'react'
import { Block, FlatList, Icon, Image, Text, useAuth } from '../../components'
import { Colors, Icons, Images, Metrics, Sizes } from '../../config'
import { Alert, Platform, Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabProps } from './Tabs'
import { MainStackType } from '.'
import { navigate } from '../../services'

export const Account = () => {

    const { logIn, logOut } = useAuth()
    const listData = [
        {
            title: 'Language',
            onPress: 'Language'
        },
        {
            title: 'Notification Settings',
            onPress: 'NotificationSetting'
        },
        {
            title: 'Change Password',
            onPress: 'ChangePassword'
        },
        {
            title: 'Privacy & Policy',
            onPress: 'AboutUs'
        },
        {
            title: 'Terms & Conditions',
            onPress: 'AboutUs'
        },
    ]
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Text
                color="primary"
                margin={{ Top: 24, Horizontal: 16, Bottom: 12 }}
                size="H4">Profile
            </Text>
            <Block style={{
                width: '90%',
                borderColor: Colors.primary,
                borderWidth: 1,
                alignSelf: 'center',
                borderRadius: 12
            }}
                onPress={() => { navigate('Profile') }}>
                <Block row padding={{ Vertical: 16, Horizontal: 16 }} margin={{}} style={{ alignItems: 'center' }}>
                    <Image source={Images.icUser} size={50} />
                    <Block align='center' gap={5}>
                        <Text
                            color="primary"
                            margin={{ Top: 4, Horizontal: 16 }}
                            size="H4" font='Bold'>Alexa knee
                        </Text>
                        <Text style={{ verticalAlign: 'middle', textAlign: 'center' }}>{'Personal Info'}</Text>
                    </Block>
                    <Block align='right' style={{ flex: 1 }}>
                        <Image source={Images.forwardIcon} style={{}} />
                    </Block>
                </Block>
            </Block>
            <Text
                color="primary"
                margin={{ Top: 24, Horizontal: 16 }}
                size="H4">Settings
            </Text>
            <FlatList
                style={{ paddingTop: 15, marginHorizontal: 16 }}
                data={listData}
                contentContainerStyle={{ backgroundColor: 'white', borderRadius: 12 }}
                renderItem={({ item, index }) => (
                    <Block onPress={() => (navigate(item?.onPress, { title: item?.title }))}>
                        <Block row padding={{ Vertical: 16, Horizontal: 16 }} space='between' margin={{}} style={{ alignItems: 'center' }}>
                            <Text style={{ verticalAlign: 'middle', textAlign: 'center' }}>{item.title}</Text>
                            <Image source={Images.forwardIcon} />
                        </Block>
                        <Block style={{ width: '90%', borderColor: 'black', borderWidth: 0.4, alignSelf: 'center' }} />
                    </Block>
                )}
                ListFooterComponent={() => (
                    <Block row padding={{ Vertical: 30, Horizontal: 16 }} margin={{}} onPress={() => logOut()}>
                        <Image source={Images.Signout} />
                        <Text
                            color="primary"
                            margin={{ Horizontal: 16 }}
                            size="H4" >Sign Out</Text>
                    </Block>
                )}
            />
        </Block>
    )
}
const styles = StyleSheet.create({

    avatar: {
        height: 126,
        width: 126,
        resizeMode: 'cover',
        borderRadius: 50,
        alignSelf: 'center',
    },
    CardContainer: {
        margin: 0,
        alignItems: 'center',
        backgroundColor: Colors.onPrimary,
        padding: 18,
        borderRadius: 10
    },
});