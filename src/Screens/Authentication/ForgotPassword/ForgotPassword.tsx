import * as React from 'react';
import {Image, View} from 'react-native';

import {BackButton, Button, Input} from '@src/Components';
import {BackgroundPattern} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from '../authentication.styles';
import {ThemedText} from '@src/Config/Theme';

export const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<'ForgotPassword'>) => {
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
