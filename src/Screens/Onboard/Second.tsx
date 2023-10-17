import * as React from 'react';
import {Image, Text, View} from 'react-native';

import {Button} from '@src/Components';
import {OnboardingElipses2, OnboardingFood2} from '@src/Assets';

import {useOnboardStyle} from './Onboard.styles';
import {AuthNavigationProps} from '@src/Routes/Navigation';

export const OnboardSecond = ({
  navigation,
}: AuthNavigationProps<'OnboardingSecond'>) => {
  const styles = useOnboardStyle();
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image source={OnboardingElipses2} style={styles.imageElipsis} />
        <Image source={OnboardingFood2} style={styles.images} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Food Ninja is Where Your Comfort Food Lives
        </Text>
        <Text style={styles.subtitle}>
          Enjoy a fast and smooth food delivery at your doorstep
        </Text>
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Next"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};
