import React from 'react';
import { useAuth } from '../components';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './Main';
import { AuthStack } from './Auth';
import { Colors, NavigationTheme } from '../config/colors'
import { navigatorRef } from '../services'
export const RootNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer ref={navigatorRef}>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
