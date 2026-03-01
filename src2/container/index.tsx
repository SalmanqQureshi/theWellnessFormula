import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text,View } from 'react-native';
import { useAuth } from '../ContextService/useAuth';
import { MainStack } from './Main';
import { UserAuthStack } from './UserAuth';

const RootNavigation = () => {
  const {user,login,islogin} = useAuth()
  return (
    <NavigationContainer>
      {islogin ? <MainStack/> : <UserAuthStack/>}
    </NavigationContainer>
  );
};

export { RootNavigation };
