import React, { useState } from 'react'
import { Block, Button, Image, ImageButton, Text, TextInput } from '../../components'
import { Colors, Icons, Images } from '../../config'
import { StyleSheet } from 'react-native'
import { MainStackProps, MainStackType } from '.'

const Profile = (props: MainStackProps<'Profile'>) => {
    console.log('props', props)
    const [editSate, setEditState] = useState(false)
    props.navigation.setOptions({
        headerTitle: () => (<Text
            align="left"
            numberOfLines={1}
            font="Medium"
            size="H4">
            {editSate ? 'Edit Profile' : 'Profile'}
        </Text>)
    })
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Block margin={{ Horizontal: 16, Top: 24 }}>
                <Block padding={{ Horizontal: 16 }}>
                    <Image
                        source={Images.icUser}
                        style={styles.avatar}
                    />
                    <ImageButton
                        onPress={() => { setEditState(s => !s) }}
                        source={editSate ? Icons.ic_camera : Icons.ic_pen}
                        style={{
                            height: 53,
                            width: 52,
                            position: 'absolute',
                            right: 72,
                            top: 5
                        }} />
                    <Text
                        align="center"
                        margin={{ Top: 16 }}
                        color='primary'
                        numberOfLines={1}
                        font="Medium"
                        size="H3">
                        Alexa Knee
                    </Text>
                    <Text
                        color="lightTextColor"
                        align="center"
                        margin={{ Top: 4 }}
                        numberOfLines={1}
                        size="Body">Personal Info
                    </Text>
                </Block>

                <TextInput
                    // {...register({ id: "email", next: "password" })}
                    label="Name"
                    type="Email"
                    keyboardType='ascii-capable'
                    rightIcon={'ic_user'} />
                <TextInput
                    // {...register({ id: "email", next: "password" })}
                    label="Email Address"
                    type="Email"
                    keyboardType='email-address'
                    rightIcon={'ic_mega_email'} />
                <TextInput
                    // {...register({ id: "email", next: "password" })}
                    label="Phone Number"
                    type="Email"
                    keyboardType='phone-pad'
                    rightIcon={'ic_phone'} />
                <TextInput
                    // {...register({ id: "email", next: "password" })}
                    label="Date Of Birth"
                    type="Email"
                    keyboardType='phone-pad'
                    rightIcon={'ic_phone'} />
                <Button label={editSate ? "Done" : "Edit"} onPress={() => setEditState(s => !s)} type='Solid' style={{ marginTop: 0 }} loading={null} />
            </Block>
        </Block>
    )
}

export { Profile }

const styles = StyleSheet.create({

    avatar: {
        height: 80,
        width: 80,
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