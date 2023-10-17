import * as React from 'react';
import {Image, Text, View, TextInput, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BackgroundPattern, checkIcon, checkedIcon} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from '../authentication.styles';
import {Button, LogoWithText} from '@src/Components';

export const SignIn = ({navigation}: AuthNavigationProps<'SignIn'>) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
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
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <View
          style={{
            alignSelf: 'flex-start',
          }}>
          <View style={styles.checkView}>
            <Pressable style={{marginRight: 6}}>
              <Image source={checkIcon} />
            </Pressable>
            <Text>Keep me signed in</Text>
          </View>
          <View style={styles.checkView}>
            <Pressable>
              <Image source={checkIcon} />
            </Pressable>
            <Text>Keep me signed in</Text>
          </View>
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
          onPress={() => navigation.navigate('OnboardingSecond')}
          label={'Login'}
        />
      </View>
    </View>
  );
};
