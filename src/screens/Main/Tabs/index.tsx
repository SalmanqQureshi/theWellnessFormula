import React from 'react';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Blank } from '../../_Blank';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackType } from '..';
import { Colors, Fonts, Icons, Images, Metrics } from '../../../config';
import { Block, Icon, Image, Text, useAuth } from '../../../components';
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { Projects, AssignedTask, Notifications, Home, Progress, Books } from './_FileGroup';
import { Platform, TouchableOpacity, View } from 'react-native';
import { HeaderTitle } from '@react-navigation/elements';
import { navigate } from '../../../services';
// import { RFValue } from 'react-native-responsive-fontsize';

export type RootStackParamList = {
  Projects: undefined | {};
  Home: undefined | {};
  Progress: undefined | {};
  Books: undefined | {};
  AssignedTask: undefined;
  Notifications: undefined;
};

// const {isLoggedIn,logIn, logOut}=useAuth()
const Tab = createBottomTabNavigator<RootStackParamList>();
// const navigation = useNavigation();

export type TabProps<T extends keyof RootStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList, T>,
  NativeStackScreenProps<MainStackType>
>;
const tabBarOptions = (route: any, navigation: any) => ({
  // headerShadowVisible: true,
  // headerShown: true,
  tabBarLabelStyle: {
    // fontFamily: Fonts.Regular,
    // fontSize: 12,
    // color: Colors.onPrimary
  },
  tabBarShowLabel: false,
  headerShown: true,
  headerTitle: () => (null),
  headerBackground: () => (
    <Image
      source={Images.backgroundScreen}
      style={{ width: '100%', height: '100%', backgroundColor: Colors.onPrimary, position: 'absolute' }}
      resizeMode="cover"
    />
  ),
  headerLeft: () => (
    <Image margin={{ Left: 22 }} source={Images.LoginLogo}
      style={{
        width: Metrics.heightRatio(60),
        height: Metrics.heightRatio(60)
      }} />
  ),
  headerRight: () => (
    <Block margin={{ Right: 24 }} row gap={8}>
      <TouchableOpacity onPress={() => { navigation.getParent()?.navigate('Notification'); }}>
        <Image source={Images.icNotification} style={{
          width: Metrics.heightRatio(32),
          height: Metrics.heightRatio(32)
        }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.getParent()?.navigate('Account'); }}>
        <Image source={Images.icUser} style={{
          width: Metrics.heightRatio(32),
          height: Metrics.heightRatio(32)
        }} />
      </TouchableOpacity>
    </Block>
  ),
  tabBarStyle: {
    position: 'absolute',
    height: Metrics.heightRatio(60),
    backgroundColor: Colors.primaryTab,
    marginHorizontal: 30,
    borderRadius: 40,
    marginBottom: 18,
    borderWidth: 0.2,
    borderColor: Colors.primaryTab,
  },

  tabBarIcon: ({ focused, color, size, }: any) => {
    let icon;
    let iconSize = 20;

    switch (route.name) {
      case 'Home':
        icon = focused && Icons.ic_home;
        break;
      case 'Projects':
        icon = focused && Icons.ic_explore;
        break;
      case 'Progress':
        icon = focused && Icons.ic_progress
        break;
      case 'Books':
        icon = focused && Icons.icon_book
        break;
    }

    return (
      focused ?
        (<View style={{
          flexDirection: 'row',
          backgroundColor: Colors.primary,
          paddingVertical: 7,
          marginLeft: 12,
          marginRight: route.name == 'Books' && 22,
          width: 85,
          borderRadius: 30,
          marginTop: 22,
        }}>
          <Image
            resizeMode="contain"
            source={icon}
            style={{
              tintColor: focused ? Colors.onPrimary : Colors.onSurface,
              marginVertical: 6,
              marginHorizontal: 6,
            }}
          />
          <Text
            size='Small'
            style={{
              color: Colors.onPrimary,
              paddingVertical: Platform.OS == 'android' ? 10 : 12,
              // backgroundColor: 'red',
            }}
          >
            {
              route.name === 'Projects'
                ? 'Explore'
                : route.name}
          </Text>
        </View>) :
        (<Text
          size='Small'
          style={{
            width: 60,
            // fontSize: 12,
            color: Colors.onPrimary,
            paddingVertical: Platform.OS == 'android' ? 0 : 30,
            paddingTop: Platform.OS == 'android' ? 9 : 0,
            // backgroundColor: 'red',
            marginTop: 8,
            marginLeft: 24
            // paddingHorizontal: 24,
          }}
        >
          {route.name}
        </Text>)
    );
  },
});
export const Tabs = (props: NativeStackScreenProps<MainStackType, 'Tabs'>) => {
  return (
    <Tab.Navigator screenOptions={({ route, navigation }) => tabBarOptions(route, navigation)}>
      <Tab.Screen component={Home} name={'Home'} />
      <Tab.Screen component={Projects} name={'Projects'} options={{ title: 'Explore' }} />
      <Tab.Screen component={Progress} name={'Progress'} />
      <Tab.Screen component={Books} name={'Books'} />
    </Tab.Navigator>
  );
};
