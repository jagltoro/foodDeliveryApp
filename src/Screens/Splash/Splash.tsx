import * as React from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BackgroundPattern, LogoColor} from '@src/Assets';

import {useSplashStyle} from './splash.styles';

export const Splash = () => {
  const styles = useSplashStyle();
  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.background} />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.5}}
      />
      <Image source={LogoColor} />
      <Text style={styles.title}>Food Ninja</Text>
      <Text style={styles.subtitle}>Deliever Favorite Food</Text>
    </View>
  );
};
