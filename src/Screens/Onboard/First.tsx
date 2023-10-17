import * as React from 'react';
import {Image, Text, View} from 'react-native';

import {Button} from '@src/Components';
import {OnboardingElipses1, OnboardingFood1} from '@src/Assets';

import {useOnboardStyle} from './Onboard.styles';
import {AuthNavigationProps} from '@src/Routes/Navigation';

export const OnboardFirst = ({
  navigation,
}: AuthNavigationProps<'OnboardingFirst'>) => {
  const styles = useOnboardStyle();
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image source={OnboardingElipses1} style={styles.imageElipsis} />
        <Image source={OnboardingFood1} style={styles.images} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Find your Comfort Food here</Text>
        <Text style={styles.subtitle}>
          Here You Can find a chef or dish for every taste and color. Enjoy!
        </Text>
        <Button
          buttonVariant="buttonPrimary"
          textVariant="buttonPrimary"
          label="Next"
          onPress={() => navigation.navigate('OnboardingSecond')}
        />
      </View>
    </View>
  );
};
