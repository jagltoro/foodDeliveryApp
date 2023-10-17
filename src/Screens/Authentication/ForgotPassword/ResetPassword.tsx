import * as React from 'react';
import {Image, Text, View, TextInput, Pressable} from 'react-native';

import {BackgroundPattern} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from '../authentication.styles';

export const ResetPassword = ({
  navigation,
}: AuthNavigationProps<'ResetPassword'>) => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.backgroundRotated} />
      <View style={styles.titleContainer}>
        <Text style={styles.formTitle}>Reset your password</Text>
        <Text style={styles.subtitle}>Please type your new password</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Confirmation')}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </Pressable>
      </View>
    </View>
  );
};
