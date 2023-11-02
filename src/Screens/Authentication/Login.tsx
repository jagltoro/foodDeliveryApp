import * as React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {ScreenContainer} from '../ScreenContainer';

import {facebookIcon, googleIcon} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from './authentication.styles';
import {Button, Input, LogoWithText} from '@src/Components';
import {ThemedText} from '@src/Config/Theme';

export const Login = ({navigation}: AuthNavigationProps<'Login'>) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <ScreenContainer>
      <LogoWithText />
      <View style={styles.form}>
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Email or Username"
        />
        <Input
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.socialLogin}>
          <ThemedText variant="subtitle">Or Continue With</ThemedText>
          <View style={styles.buttonSocialContainer}>
            <Pressable
              style={styles.buttonSocial}
              onPress={() => navigation.navigate('OnboardingSecond')}>
              <Image source={facebookIcon} style={styles.socialIcon} />
              <Text style={styles.buttonText}>Facebook</Text>
            </Pressable>
            <Pressable
              style={styles.buttonSocial}
              onPress={() => navigation.navigate('OnboardingSecond')}>
              <Image source={googleIcon} style={styles.socialIcon} />
              <Text style={styles.buttonText}>Google</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => navigation.navigate('ForgotPasswordNavigation')}>
            <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonsContainerRow}>
        <Button
          buttonVariant="buttonSecondary"
          textVariant="buttonSecondary"
          onPress={() => navigation.navigate('CreateAccountNavigation')}
          label={'Sign Up'}
        />
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          onPress={() => navigation.navigate('CreateAccountNavigation')}
          label={'Login'}
        />
      </View>
    </ScreenContainer>
  );
};
