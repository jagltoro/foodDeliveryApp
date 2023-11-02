import * as React from 'react';
import {View} from 'react-native';

import {ThemedText} from '@src/Config/Theme';
import {CreateAccountNavigationProps} from '@src/Routes/Partials';
import {Button, Checkbox, Input, LogoWithText} from '@src/Components';

import {useCreateAccountStyle} from './createAccount.styles';
import {ScreenContainer} from '@src/Screens';

export const SignIn = ({
  navigation,
}: CreateAccountNavigationProps<'SignIn'>) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(true);
  const [promotions, setPromotions] = React.useState(true);
  const styles = useCreateAccountStyle();

  return (
    <ScreenContainer>
      <LogoWithText />
      <View>
        <ThemedText variant="title" marginBottom="l">
          Sign Up for free
        </ThemedText>
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
        <View style={styles.checkView}>
          <Checkbox
            label="Keep me signed in"
            onPress={() => setRemember(!remember)}
            checked={remember}
          />
          <Checkbox
            label="Email Me About Special Pricing"
            onPress={() => setPromotions(!promotions)}
            checked={promotions}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          onPress={() => navigation.navigate('PersonalData')}
          label={'Create account'}
        />
      </View>
    </ScreenContainer>
  );
};
