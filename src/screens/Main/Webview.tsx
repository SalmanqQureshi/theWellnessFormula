import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackType } from '.';
// import WV from 'react-native-webview';

export const WebView = (
  props: StackScreenProps<MainStackType, 'WebView'>,
) => {
  return (null
    // <WV
    //   source={{
    //     uri: props.route.params.uri,
    //   }}
    // />
  );
};
