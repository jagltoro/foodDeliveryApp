import * as React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BackgroundPattern, SuccessImage} from '@src/Assets';
import {AuthNavigationProps} from '@src/Routes/Navigation';

import {useAuthenticationStyle} from '../authentication.styles';

export const Confirmation = ({
  navigation,
}: AuthNavigationProps<'Confirmation'>) => {
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
        <Text style={styles.title}>Congrats!</Text>
        <Text style={styles.formTitle}>Password was reset</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};
