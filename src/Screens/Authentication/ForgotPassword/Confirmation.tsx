import * as React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button} from '@src/Components';
import {ThemedText} from '@src/Config/Theme';
import {BackgroundPattern, SuccessImage} from '@src/Assets';
import {ForgotPasswordNavigationProps} from '@src/Routes/Partials';

import {useAuthenticationStyle} from '../authentication.styles';

export const Confirmation = ({
  navigation,
}: ForgotPasswordNavigationProps<'Confirmation'>) => {
  const styles = useAuthenticationStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.background} />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.5}}
      />
      <Image source={SuccessImage} />
      <View style={styles.information}>
        <ThemedText variant="titleFoodNinja">Congrats!</ThemedText>
        <ThemedText variant="title">Password was reset</ThemedText>
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};
