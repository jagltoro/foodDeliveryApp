import * as React from 'react';
import {Image, Text, View, TextInput, Pressable} from 'react-native';

import {BackgroundPattern} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from '../authentication.styles';

export const VerificationCode = ({
  navigation,
}: AuthNavigationProps<'VerificationCode'>) => {
  const [code, setCode] = React.useState('');
  const styles = useAuthenticationStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.backgroundRotated} />
      <View style={styles.form}>
        <Text style={styles.formTitle}>Enter 4-digit verification code</Text>
        <TextInput
          style={styles.inputCode}
          onChangeText={setCode}
          value={code}
          maxLength={4}
          keyboardType="number-pad"
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </Pressable>
      </View>
    </View>
  );
};
