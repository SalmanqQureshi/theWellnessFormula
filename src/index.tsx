import React, { useEffect } from 'react';
import { Alert, AuthProvider, Block } from './components';
import { RootNavigation } from './screens';
import SplashScreen from 'react-native-splash-screen';
// import KeyboardManager from 'react-native-keyboard-manager';
import { Platform, StatusBar } from 'react-native';
import { Colors } from './config';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  useEffect(() => {
    if (Platform.OS == "ios") {
      // KeyboardManager.setEnable(true)
    } else {
      StatusBar.setBackgroundColor(Colors.background)
      StatusBar.setBarStyle('dark-content')
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [])
  return (
    <AuthProvider PersistVersion={0}>
      <StatusBar barStyle={'dark-content'} />
      <Block flex gradient={[Colors.onPrimary, Colors.onSecondary]}>
        <RootNavigation />
      </Block>
      <Alert />
      <FlashMessage/>
    </AuthProvider>
  );
}
