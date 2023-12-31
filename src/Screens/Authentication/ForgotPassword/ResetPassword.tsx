import * as React from 'react';
import {View} from 'react-native';
import {ScreenContainer} from '@src/Screens';

import {ThemedText} from '@src/Config/Theme';
import {Button, Input} from '@src/Components';
import {ForgotPasswordNavigationProps} from '@src/Routes/Partials';

import {useAuthenticationStyle} from '../authentication.styles';

export const ResetPassword = ({
  navigation,
}: ForgotPasswordNavigationProps<'ResetPassword'>) => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <ScreenContainer additionalStyle={styles.container}>
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
    </ScreenContainer>
  );
};
