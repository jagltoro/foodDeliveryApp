import * as React from 'react';
import {Image, Text, View, Pressable} from 'react-native';

import {BackgroundPattern, checkIcon, checkedIcon} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useCreateAccountStyle} from './createAccount.styles';
import {BackButton, Button, Input, LogoWithText} from '@src/Components';
import LinearGradient from 'react-native-linear-gradient';
import {ThemedText} from '@src/Config/Theme';

export const SignIn = ({navigation}: AuthNavigationProps<'SignIn'>) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const styles = useCreateAccountStyle();

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
      <View>
        <ThemedText variant="title">Sign Up for free</ThemedText>
      </View>
      <View style={styles.form}>
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <Input onChangeText={setEmail} value={email} placeholder="Email" />
        <Input
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
      <View style={styles.buttonsContainer}>
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
