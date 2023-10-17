import * as React from 'react';
import {Image, Text, View, TextInput} from 'react-native';

import {Button} from '@src/Components';
import {BackgroundPattern} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from '../authentication.styles';

export const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<'ForgotPassword'>) => {
  const [username, setUsername] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.backgroundRotated} />
      <View style={styles.form}>
        <Text style={styles.formTitle}>
          Enter your email to send a verification code
        </Text>
        <TextInput
          style={styles.input}
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
