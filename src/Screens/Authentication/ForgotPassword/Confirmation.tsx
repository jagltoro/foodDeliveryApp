import * as React from 'react';
import {Image, View} from 'react-native';

import {Button} from '@src/Components';
import {SuccessImage} from '@src/Assets';
import {ScreenContainer} from '@src/Screens';
import {ThemedText} from '@src/Config/Theme';
import {ForgotPasswordNavigationProps} from '@src/Routes/Partials';

import {useAuthenticationStyle} from '../authentication.styles';

export const Confirmation = ({
  navigation,
}: ForgotPasswordNavigationProps<'Confirmation'>) => {
  const styles = useAuthenticationStyle();

  return (
    <ScreenContainer>
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
    </ScreenContainer>
  );
};
