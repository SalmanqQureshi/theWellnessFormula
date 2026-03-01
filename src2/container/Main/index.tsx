import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Metrics } from '../../../src/config';
import { Button, Icon } from '../../../src/components';
import { useNavigation } from '@react-navigation/native';
import { Home } from './Home';
import { Profile } from './Profile';
import { Contact } from './Contact';
import { About } from './About';
import { Tabs } from './Tabs';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={({ route }) => ({
        // headerShadowVisible: false,
        headerLeft: () => (
          <Icon
            onPress={() => {}}
            margin={{ Left: Metrics.iPadHeightRatio(0) }}
            size={38}
            name={'backButton'}
          />
        ),
        headerRight: () => (
          <Button
            label="Save"
            style={{
              width: 70,
              marginRight: Metrics.iPadHeightRatio(12),
              maxHeight: 38,
              minHeight: 38,
            }}
            onPress={() => goBack()}
          />
        ),
      })}
    >
        <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen component={Tabs} name={'Tabs'} />
              </Stack.Group>
      <Stack.Group >
        <Stack.Screen component={Home} name={'Home'} />
        <Stack.Screen component={Profile} name={'Profile'} />
        <Stack.Screen component={About} name={'About Us'} />
        <Stack.Screen component={Contact} name={'Contact Us'} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export {MainStack};
