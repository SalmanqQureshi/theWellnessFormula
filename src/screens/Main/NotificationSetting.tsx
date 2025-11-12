import React, { useState } from 'react'
import { Block, Text } from '../../components'
import { Colors } from '../../config'
import { StyleSheet, Switch, SwitchComponent } from 'react-native'

const NotificationSetting = () => {

    const notiData = [
        { id: 1, title: 'General Notification', isTrue: true },
        { id: 2, title: 'Sound', isTrue: true },
        { id: 3, title: 'Vibrate Notification', isTrue: false },
        { id: 4, title: 'Silent', isTrue: false },
        { id: 5, title: 'Special Offer', isTrue: true }
    ]
    const [state, setState] = useState(notiData)
    const [status, setStatus] = useState(notiData)
    const onSwitch = (items: any) => {
        const isIds = status.includes(items.id);
        const setTrue: any = isIds ? (status.filter((id) => (
            console.log("Inner Function"),
            id != items.id
        ))) : (console.log('Else Condition'), [items.id].concat(status))
        setStatus(setTrue);
        console.log(setTrue)
    }
    const SwitchRow = (props: any) => {
        const { label = '', status = false, onChange = () => { } } = props;
        return (
            <Block row space={'between'} style={Styles.CardContainer}>
                <Text font='Regular' size='H6' style={{ alignSelf: 'center' }}>
                    {label}
                </Text>
                <Switch
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    trackColor={{ false: '#c7d1e6', true: Colors.primary }}
                    thumbColor={status ? '#d5fffb' : Colors.primary}
                    ios_backgroundColor="#d5fffb"
                    onValueChange={onChange}
                    value={status}
                />
            </Block>
        );
    };
    const isTrue = () => {
        // const isTrue = 
    }
    return (
        <Block flex scroll scrollGradient gradient={[Colors.onPrimary, Colors.onSecondary]}>
            <Block margin={{ Top: 24, Horizontal: 16 }}>
                {notiData.map((item) => (
                    <SwitchRow label={item.title} status={status.includes(item?.id) ? true : false} onChange={() => { onSwitch(item) }} />
                ))}
            </Block>
        </Block>
    )
}

export { NotificationSetting }

const Styles = StyleSheet.create({
    CardContainer: {
        marginTop: 10,
        // backgroundColor: Colors.onPrimary,
        paddingVertical: 12,
        // borderRadius: 10
    },
});