import * as React from 'react';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BackgroundPattern, facebookIcon, googleIcon} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from './authentication.styles';
import {Button, LogoWithText} from '@src/Components';

export const Login = ({navigation}: AuthNavigationProps<'Login'>) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.background} />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.5}}
      />
      <LogoWithText />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Email or Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.socialLogin}>
          <Text style={styles.continueWithSocial}>Or Continue With</Text>
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
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonsContainerRow}>
        <Button
          buttonVariant="buttonSecondary"
          textVariant="buttonSecondary"
          onPress={() => navigation.navigate('SignUp')}
          label={'Sign Up'}
        />
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          onPress={() => navigation.navigate('SignIn')}
          label={'Login'}
        />
      </View>
    </View>
  );
};
