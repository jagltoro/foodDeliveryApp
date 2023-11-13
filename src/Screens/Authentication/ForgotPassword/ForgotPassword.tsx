import * as React from 'react';
import {View} from 'react-native';
import {ScreenContainer} from '@src/Screens';

import {ThemedText} from '@src/Config/Theme';
import {BackButton, Button, Input} from '@src/Components';
import {ForgotPasswordNavigationProps} from '@src/Routes/Partials';

import {useAuthenticationStyle} from '../authentication.styles';

export const ForgotPassword = ({
  navigation,
}: ForgotPasswordNavigationProps<'ForgotPassword'>) => {
  const [username, setUsername] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <ScreenContainer isRotated additionalStyle={styles.container}>
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
    </ScreenContainer>
  );
};
