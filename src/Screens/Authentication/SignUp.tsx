import * as React from 'react';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button, LogoWithText} from '@src/Components';
import {BackgroundPattern} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from './authentication.styles';

export const SignUp = ({navigation}: AuthNavigationProps<'SignUp'>) => {
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
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Create Account"
          onPress={() => navigation.navigate('OnboardingSecond')}
        />
        <Pressable>
          <Text style={styles.forgotPassword}>Already have an account?</Text>
        </Pressable>
      </View>
    </View>
  );
};
