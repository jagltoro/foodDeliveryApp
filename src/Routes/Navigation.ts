import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackAnimationTypes} from 'react-native-screens';

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes,
> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthenticationRoutes, RouteName>,
    BottomTabNavigationProp<AppRoutes, 'Main'>
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: BottomTabNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Main: undefined;
};

export type AuthenticationRoutes = {
  Splash: undefined;
  OnboardingFirst: undefined;
  OnboardingSecond: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPasswordNavigation: undefined;
  CreateAccountNavigation: undefined;
};

export type HomeRoutes = {
  OutfitIdeas: undefined;
  FavoriteOutfits: undefined;
  TransactionHistory: undefined;
};

/* === Navigator Options  ===*/
const animation: StackAnimationTypes = 'slide_from_right';

export const navigatorOptions = {
  headerShown: false,
  animation,
};
