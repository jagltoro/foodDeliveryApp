import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export interface MainNavigationProps<RouteName extends keyof MainRoutes> {
  navigation: BottomTabNavigationProp<MainRoutes, RouteName>;
  route: RouteProp<MainRoutes, RouteName>;
}

export type MainRoutes = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Chat: undefined;
};
