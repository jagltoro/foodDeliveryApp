import * as React from 'react';
import {useTheme} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ThemeConfig} from '@src/Config';
import AuthenticationRouter from './AuthenticationRoutes';
import {AppRoutes, navigatorOptions} from './Navigation';
import {MainNavigationRouter} from './Partials';

const Stack = createNativeStackNavigator<AppRoutes>();

function RootRouter() {
  const theme = useTheme<ThemeConfig.Theme>();

  const navigationTheme = {
    dark: true,
    colors: {...theme.colors},
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Authentication"
        screenOptions={navigatorOptions}>
        <Stack.Screen name="Authentication" component={AuthenticationRouter} />
        <Stack.Screen name="Main" component={MainNavigationRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootRouter;
