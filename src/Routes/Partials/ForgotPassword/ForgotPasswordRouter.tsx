import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPassword} from '@src/Screens';
import {navigatorOptions} from '../../Navigation';
import {ForgotPasswordRoutes} from './ForgotPassword.types';

const ForgotPasswordStack = createNativeStackNavigator<ForgotPasswordRoutes>();

export function ForgotPasswordRouter() {
  return (
    <ForgotPasswordStack.Navigator
      initialRouteName="ForgotPassword"
      screenOptions={navigatorOptions}>
      <ForgotPasswordStack.Screen
        name="ForgotPassword"
        component={ForgotPassword.ForgotPassword}
      />
      <ForgotPasswordStack.Screen
        name="VerificationCode"
        component={ForgotPassword.VerificationCode}
      />
      <ForgotPasswordStack.Screen
        name="ResetPassword"
        component={ForgotPassword.ResetPassword}
      />
      <ForgotPasswordStack.Screen
        name="Confirmation"
        component={ForgotPassword.Confirmation}
      />
    </ForgotPasswordStack.Navigator>
  );
}
