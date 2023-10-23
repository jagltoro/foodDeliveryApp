import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CreateAccount} from '@src/Screens';
import {navigatorOptions} from '../../Navigation';

import {CreateAccountRoutes} from './CreateAccount.types';

const CreateAccountStack = createNativeStackNavigator<CreateAccountRoutes>();

export function CreateAccountRouter() {
  return (
    <CreateAccountStack.Navigator
      initialRouteName="SignIn"
      screenOptions={navigatorOptions}>
      <CreateAccountStack.Screen
        name="SignIn"
        component={CreateAccount.SignIn}
      />
      <CreateAccountStack.Screen
        name="PersonalData"
        component={CreateAccount.PersonalData}
      />
    </CreateAccountStack.Navigator>
  );
}
