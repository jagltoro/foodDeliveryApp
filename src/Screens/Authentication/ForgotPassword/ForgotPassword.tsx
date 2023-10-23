import * as React from 'react';
import {Image, View} from 'react-native';

import {ThemedText} from '@src/Config/Theme';
import {BackgroundPattern} from '@src/Assets';
import {BackButton, Button, Input} from '@src/Components';
import {ForgotPasswordNavigationProps} from '@src/Routes/Partials';

import {useAuthenticationStyle} from '../authentication.styles';

export const ForgotPassword = ({
  navigation,
}: ForgotPasswordNavigationProps<'ForgotPassword'>) => {
  const [username, setUsername] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.backgroundRotated} />
      <BackButton onPress={() => navigation.goBack()} />

      <View style={styles.form}>
        <ThemedText variant="title" marginBottom="xl">
          Enter your email to send a verification code
        </ThemedText>
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Email"
        />
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Send verification code"
          onPress={() => navigation.navigate('VerificationCode')}
        />
      </View>
    </View>
  );
};
