import * as React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home} from '@src/Screens';
import {MainRoutes} from './MainNavigationRouter.types';
import {MyTabBar} from './_TabBar';

const Tab = createBottomTabNavigator<MainRoutes>();

export function MainNavigationRouter() {
  const TabBar = React.useCallback(
    (props: BottomTabBarProps) => <MyTabBar {...props} />,
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBar}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen name="Cart" component={Home} />
      <Tab.Screen name="Chat" component={Home} />
    </Tab.Navigator>
  );
}
