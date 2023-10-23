import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AuthenticationRoutes} from '@src/Routes/Navigation';

export interface CreateAccountNavigationProps<
  RouteName extends keyof CreateAccountRoutes,
> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<CreateAccountRoutes, RouteName>,
    NativeStackNavigationProp<AuthenticationRoutes, 'Login'>
  >;
  route: RouteProp<CreateAccountRoutes, RouteName>;
}

export type CreateAccountRoutes = {
  SignIn: undefined;
  PersonalData: undefined;
};
