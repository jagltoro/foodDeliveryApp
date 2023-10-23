import * as React from 'react';
import {Image, View} from 'react-native';

import {ThemedText} from '@src/Config/Theme';
import {BackgroundPattern} from '@src/Assets';
import {CreateAccountNavigationProps} from '@src/Routes/Partials';
import {BackButton, Button, Input} from '@src/Components';

import {useCreateAccountStyle} from './createAccount.styles';

export const PersonalData = ({
  navigation,
}: CreateAccountNavigationProps<'PersonalData'>) => {
  const [username, setUsername] = React.useState('');
  const styles = useCreateAccountStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.backgroundRotated} />
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.titleContainer}>
        <ThemedText variant="title" marginBottom="xl">
          Fill in your bio to get started
        </ThemedText>
        <ThemedText variant="subtitle" marginBottom="xl">
          This data will be displayed in your account profile for security
        </ThemedText>
      </View>
      <View style={styles.form}>
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Email"
        />
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Email"
        />
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Email"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Send verification code"
          onPress={() => navigation.navigate('PersonalData')}
        />
      </View>
    </View>
  );
};
