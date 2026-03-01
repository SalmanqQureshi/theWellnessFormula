import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '../../../src/components';
import { useAuth } from '../../ContextService/useAuth';

const Home = () => {
    const {logout}= useAuth()
  return (
    <View>
      <Text>Home</Text>
      <Button
            label="Logout" 
            onPress={() => logout()} 
            type='Solid' 
            style={{ marginTop: -24 }} />
    </View>
  );
};

export { Home };
