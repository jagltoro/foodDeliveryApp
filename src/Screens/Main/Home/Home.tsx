import * as React from 'react';
import {Image, Text} from 'react-native';
import {ScreenContainer} from '@src/Screens';

import {LogoColor} from '@src/Assets';

import {useHomeStyle} from './home.styles';

export const Home = () => {
  const styles = useHomeStyle();
  return (
    <ScreenContainer isRotated>
      <Image source={LogoColor} />
      <Text style={styles.title}>Food Ninja</Text>
      <Text style={styles.subtitle}>Deliever Favorite Food</Text>
    </ScreenContainer>
  );
};
