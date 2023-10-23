import * as React from 'react';
import {Image, View} from 'react-native';

import {ThemedText} from '@src/Config/Theme';
import {BackgroundPattern} from '@src/Assets';
import {BackButton, Button, Input} from '@src/Components';
import {ForgotPasswordNavigationProps} from '@src/Routes/Partials';

import {useAuthenticationStyle} from '../authentication.styles';

export const VerificationCode = ({
  navigation,
}: ForgotPasswordNavigationProps<'VerificationCode'>) => {
  const [code, setCode] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.backgroundRotated} />
      <BackButton onPress={() => navigation.goBack()} />

      <View style={styles.form}>
        <ThemedText variant="title" marginBottom="xl">
          Enter 4-digit verification code
        </ThemedText>
        <Input
          style={styles.inputCode}
          onChangeText={setCode}
          value={code}
          maxLength={4}
          keyboardType="number-pad"
        />
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Reset Password"
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </View>
    </View>
  );
};
