import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Image, Text, Block, Icon, AvatarInfo } from '../../components';
import { Colors, Fonts, Images, Metrics, Sizes } from '../../config';
import { GiftedChat, Bubble, Time } from 'react-native-gifted-chat';
import KeyboardManager from 'react-native-keyboard-manager';
import { setAdjustPan, setAdjustResize } from 'rn-android-keyboard-adjust';
// import { MainScreenProps } from '.';

export const CommentChat = () => {
    //props: StackScreenProps<MainScreenProps, 'Messages'>
    // const { navigation, route } = props;

    const inputRef = useRef();
    const [messages, setMessages] = useState([
        {
            _id: 3,
            text: 'Many people were hoping',
            user: {
                _id: 1,
                name: 'React Native',
                avatar: Images.assigneMember2,
            },
            createdAt: new Date(),
        },
        {
            _id: 4,
            text: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: Images.assigneMember2,
            },
            createdAt: new Date(),
        },
        {
            _id: 4,
            text: 'You can’t use up creativity. The more you use, the more you have. ',
            user: {
                _id: 2,
                name: 'React Native',
                avatar: Images.assigneMember2,
            },
            createdAt: new Date(),
        },
    ]);

    React.useEffect(() => {

        if (Platform.OS == 'android') {
            setAdjustResize();
        }

        return () => {
            if (Platform.OS == 'android') {
                setAdjustPan();
            }
        };
    }, []);

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Block row style={{ alignItems: 'center', }}>
    //                 <Icon
    //                     name={'icBack'}
    //                     margin={{ Horizontal: 18 }}
    //                     color={Colors.shadow}
    //                     onPress={() => navigation.pop()}
    //                 />
    //                 <AvatarInfo gap={8} imgSize={38} fontSize={18} fontType='SemiBold' name='Fiona Powell' />
    //             </Block>
    //         ),
    //     });
    // }, []);

    const Input = forwardRef((props, ref) => {
        const [val, setVal] = useState('');

        useImperativeHandle(ref, () => ({
            //   setText: txt => setVal(txt),
            getValue: () => val,
        }));

        return (
            <TextInput placeholder='Enter message here...'
                placeholderTextColor={Colors.surfaceVariant}
                style={{ height: 52, width: '85%', color: '#000', paddingLeft: Metrics.heightRatio(-6), }} />
        );
    });

    const renderInputToolbar = ({ }) => {
        return (
            <View
                style={styles.inputContainer}>
                <TouchableOpacity style={{ alignSelf: 'center' , marginLeft:Metrics.heightRatio(-6) }}>
                    <Icon name={'icAttachFile'} size={24} />
                </TouchableOpacity>
                <Input ref={inputRef} />
                <TouchableOpacity style={{ alignSelf: 'center', marginLeft:Metrics.heightRatio(-6) }}>
                    <Icon name={'icSend'} size={24} />
                </TouchableOpacity>
            </View>
        );
    };

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);

    useEffect(() => {
        if (Platform.OS == "ios") {
            KeyboardManager.setEnable(false);
            KeyboardManager.setEnableAutoToolbar(false);
            return () => {
                KeyboardManager.setEnable(true);
                KeyboardManager.setEnableAutoToolbar(true);
            };
        }
    }, []);

    const renderBubble = (props: any) => <Bubble {...props} {...styles.bubble} />;

    return (
        <Block safe flex padding={{ Bottom: 16}}>

            <GiftedChat
                user={{ _id: 1 }}
                messages={messages}
                placeholder='Enter message here…'
                renderBubble={renderBubble}

                textInputProps={{

                    color: Colors.textColors
                }}

                // textInputStyle={{
                //     // ...Fonts.RegularFont(),
                //     fontSize: 14,
                //     color: Colors.shadow,
                // }}
                // renderTime={props => <Time {...props} />}
                renderInputToolbar={renderInputToolbar}
                // renderAvatar={null}
                // isKeyboardInternallyHandled={false}
                showUserAvatar={false}
            // renderUsername={(user)=>(<Text color='red'>{user.name}gfdgdfgdfg</Text>)}
            />

        </Block>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    bubble: {
        textStyle: {
            left: {
                color: Colors.textColors,
                fontSize: 13,
            },
            right: {
                color: Colors.textColors,
                fontSize: 13,
            },
        },
        wrapperStyle: {
            left: {
                borderTopLeftRadius: 0,
                padding: Sizes.Base / 2,
                marginTop: Sizes.Base / 2,
                backgroundColor: Colors.surface//'#e4e6ec',
            },
            right: {
                borderTopRightRadius: 0,
                padding: Sizes.Base / 2,
                marginTop: Sizes.Base / 2,
                backgroundColor: Colors.chatsideColor,
                marginBottom: 50,
            },
            bottomContainerStyle: {
                // marginBottom: 50,
            },
        },
    },
    headerImgStyle: {
        marginRight: 10,
        width: 42,
        height: 42,
        borderRadius: 42,
    },
    sendBtnIcon: {
        marginLeft: 10,
        width: 22,
        height: 22,
    },
    dotStyle: {
        height: 6,
        width: 6,
        borderRadius: 6,
        // backgroundColor: Colors.GREEN,
        marginRight: 5,
    },
    onlineDot: {
        width: 8,
        height: 8,
        backgroundColor: '#2ad601',
        borderRadius: 50,
    },
    userImageStyle: { width: 40, height: 40 },
    inputContainer: {
        marginTop: Platform.OS=='ios'? -18 : 0,
        flexDirection: 'row',
        paddingRight: 12,
        backgroundColor: '#fff',
        // bottom: 0,
        // marginBottom: 16,
        width: '100%',
        justifyContent: 'space-between',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        marginLeft: '0%',
        alignSelf: 'center',
        paddingLeft: Sizes.Base
    }
});
