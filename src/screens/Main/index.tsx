import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  WebView,
  ChangePasswod,
  AboutUs,
  Tabs,
  Account,
  Profile,
  RootStackParamList,
  NotificationSetting,
  Language,
  Notification,
  Article,
  Nutrition
} from './_FileGroup';
import { Button, Icon, Image, Text } from '../../components';
import { Colors, Images, Metrics } from '../../config';
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { StackScreenNativeProps } from 'react-native-screens/lib/typescript/components/gamma/StackScreen';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type MainStackType = {
  Tabs: undefined;
  WebView: {
    uri: string;
    title: string;
  };
  ProjectDetail: undefined | {}
  TaskDetail: undefined | {}
  EditProfile: undefined | {}
  ChangePassword: undefined | {}
  AboutUs: undefined | {}
  ProjectDetailFolder: undefined | {}
  ProjectDetailPdfList: undefined | {}
  ProjectDetailPdfPage: undefined | {}
  PrivacyPolicy: undefined | {}
  Account: undefined | {}
  Profile: undefined | {}
  NotificationSetting: undefined | {}
  Language: undefined | {}
  Notification: undefined | {}
  Article: undefined | {}
  Nutrition: undefined | {}
};

const routes = {
  ProjectDetail: 'Projects',
  TaskDetail: 'Task',
  EditProfile: 'Edit Profile',
  ChangePassword: 'Change Password',
  AboutUs: 'About',
  NotificationSetting: 'Notification Setting',
  ProjectDetailFolder: 'Project Detail Folder',
  ProjectDetailPdfList: 'Project Detail PdfList',
  ProjectDetailPdfPage: 'ASF Trench block',
  PrivacyPolicy: 'Privacy Policy',
  Account: 'Account',
  Profile: 'Profile',
  Language: 'Language',
  Notification: 'Notification',
  Article: 'Article',
  Nutrition: 'Nutrition 01'
};

const Stack = createNativeStackNavigator<MainStackType>();

export const MainStack = () => {
  const { goBack } = useNavigation()
  return (
    <Stack.Navigator
      initialRouteName='Tabs'
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        headerLeft: () => (
          <Icon
            onPress={() => goBack()}
            margin={{ Left: Metrics.iPadHeightRatio(0), }}
            size={38}
            name={'backButton'} />
        ),
        headerRight: () => routes[route.name] == 'ASF Trench block' && (
          <Button
            label='Save'
            style={{ width: 70, marginRight: Metrics.iPadHeightRatio(12), maxHeight: 38, minHeight: 38 }}
            onPress={() => goBack()}
          />
        ),
      })}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Tabs} name={'Tabs'} />
      </Stack.Group>
      <Stack.Group screenOptions={({ route }) => ({
        headerTitleAlign: 'left',
        headerTitle: () => <Text size="H4" font="SemiBold" align='left' style={{ textAlign: 'left', flex: 1, marginLeft: 16 }}>{routes[route.name]}</Text>,
        headerBackground: () => (
          <Image
            source={Images.backgroundScreen}
            style={{ width: '100%', height: '100%', backgroundColor: Colors.onPrimary, position: 'absolute' }}
            resizeMode="cover"
          />
        ),
        headerStyle: {
          // backgroundColor: Colors.background,
          // height: Metrics.navBarHeight + Metrics.baseMargin
        }
      })}>
        <Stack.Screen component={WebView} name={'WebView'} />
        <Stack.Screen component={ChangePasswod} name={'ChangePassword'} />
        <Stack.Screen component={AboutUs} name={'AboutUs'} />
        <Stack.Screen component={Account} name={'Account'} />
        <Stack.Screen component={Profile} name={'Profile'} />
        <Stack.Screen component={NotificationSetting} name={'NotificationSetting'} />
        <Stack.Screen component={Language} name={'Language'} />
        <Stack.Screen component={Notification} name={'Notification'} />
        <Stack.Screen component={Article} name={'Article'} />
        <Stack.Screen component={Nutrition} name={'Nutrition'} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export type MainStackProps<T extends keyof MainStackType> = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList>,
  StackScreenNativeProps<MainStackType, T>
>;
