import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Metrics } from '../../../src/config';
import { Button, Icon } from '../../../src/components';
import { useNavigation } from '@react-navigation/native';
import { Signin } from './Signin';
import Signup from './Signup';

const Stack = createNativeStackNavigator();
const UserAuthStack = () => {
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
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
        <Stack.Screen component={Signin} name={'Signin'} />
        <Stack.Screen component={Signup} name={'Signup'} />
        <Stack.Screen component={Signup} name={'ForgetPassword'} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { UserAuthStack };
