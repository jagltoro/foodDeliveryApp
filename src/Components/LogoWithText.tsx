import * as React from 'react';
import {Image, View} from 'react-native';

import {LogoColor} from '@src/Assets';
import {createStyles} from '@src/Config/Theme/createStyles';

import {ThemedText} from '@src/Config/Theme';

export const LogoWithText = () => {
  const styles = useStyle();
  return (
    <View style={styles.information}>
      <Image source={LogoColor} />
      <ThemedText variant="titleFoodNinja">Food Ninja</ThemedText>
      <ThemedText variant="subtitle">Deliever Favorite Food</ThemedText>
    </View>
  );
};

const useStyle = createStyles(() => ({
  information: {
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
