import * as React from 'react';
import {Image, View} from 'react-native';

import {BackgroundPattern} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from '../authentication.styles';
import {ThemedText} from '@src/Config/Theme';
import {Button, Input} from '@src/Components';

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
        <ThemedText variant="title" marginBottom="m">
          Reset your password
        </ThemedText>
        <ThemedText variant="subtitle">
          Please type your new password
        </ThemedText>
      </View>
      <View style={styles.form}>
        <Input
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <Input
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
        />
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Reset Password"
          onPress={() => navigation.navigate('Confirmation')}
        />
      </View>
    </View>
  );
};
