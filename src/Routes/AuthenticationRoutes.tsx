import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Splash, OnboardFirst, OnboardSecond, Login} from '../Screens';
import {AuthenticationRoutes, navigatorOptions} from './Navigation';
import {ForgotPasswordRouter, CreateAccountRouter} from './Partials';

const Stack = createNativeStackNavigator<AuthenticationRoutes>();

function AuthenticationRouter() {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingFirst"
      screenOptions={navigatorOptions}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardingFirst" component={OnboardFirst} />
      <Stack.Screen name="OnboardingSecond" component={OnboardSecond} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="ForgotPasswordNavigation"
        component={ForgotPasswordRouter}
      />
      <Stack.Screen
        name="CreateAccountNavigation"
        component={CreateAccountRouter}
      />
    </Stack.Navigator>
  );
}

export default AuthenticationRouter;
