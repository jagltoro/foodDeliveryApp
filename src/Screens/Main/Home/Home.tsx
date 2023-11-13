import * as React from 'react';
import {View} from 'react-native';
import {ScreenContainer} from '@src/Screens';

import {useHomeStyle} from './home.styles';
import {ThemedText} from '@src/Config/Theme';
import {HomeBanner, Notification} from './Components';

export const Home = () => {
  const styles = useHomeStyle();
  return (
    <ScreenContainer isRotated>
      <View style={styles.container}>
        <ThemedText variant="title" fontSize={32}>
          Find your favorite food
        </ThemedText>
        <Notification />
      </View>
      <HomeBanner />
    </ScreenContainer>
  );
};
