import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Splash,
  OnboardFirst,
  OnboardSecond,
  Login,
  ForgotPassword,
  CreateAccount,
} from '../Screens';
import {AuthenticationRoutes, navigatorOptions} from './Navigation';

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
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordRouter} />
      <Stack.Screen name="SignIn" component={CreateAccount.SignIn} />
    </Stack.Navigator>
  );
}

function ForgotPasswordRouter() {
  return (
    <Stack.Navigator
      initialRouteName="ForgotPassword"
      screenOptions={navigatorOptions}>
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword.ForgotPassword}
      />
      <Stack.Screen
        name="VerificationCode"
        component={ForgotPassword.VerificationCode}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ForgotPassword.ResetPassword}
      />
      <Stack.Screen
        name="Confirmation"
        component={ForgotPassword.Confirmation}
      />
      <Stack.Screen name="SignIn" component={CreateAccount.SignIn} />
    </Stack.Navigator>
  );
}

export default AuthenticationRouter;
