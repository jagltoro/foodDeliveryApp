import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthenticationRoutes} from '@src/Routes/Navigation';

export interface ForgotPasswordNavigationProps<
  RouteName extends keyof ForgotPasswordRoutes,
> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<ForgotPasswordRoutes, RouteName>,
    NativeStackNavigationProp<AuthenticationRoutes, 'Login'>
  >;
  route: RouteProp<ForgotPasswordRoutes, RouteName>;
}

export type ForgotPasswordRoutes = {
  ForgotPassword: undefined;
  VerificationCode: undefined;
  ResetPassword: undefined;
  Confirmation: undefined;
};
