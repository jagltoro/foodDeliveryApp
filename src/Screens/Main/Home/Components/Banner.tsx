import * as React from 'react';
import {Image, View} from 'react-native';

import {ThemeConfig} from '@src/Config';
import {ThemedButton, ThemedText} from '@src/Config/Theme';
import {BackgroundPattern, BannerImage} from '@src/Assets';
import {createStyles} from '@src/Config/Theme/createStyles';

export const HomeBanner = () => {
  const styles = useBannerStyle();

  return (
    <View style={styles.container}>
      <Image source={BackgroundPattern} style={styles.background} />
      <View>
        <Image source={BannerImage} />
      </View>
      <View style={styles.content}>
        <ThemedText variant="title" color="black">
          Special deal for November
        </ThemedText>
        <ThemedButton variant="buttonWhite">
          <ThemedText variant="buttonSecondary">Buy Now</ThemedText>
        </ThemedButton>
      </View>
    </View>
  );
};

export const useBannerStyle = createStyles((theme: ThemeConfig.Theme) => ({
  container: {
    backgroundColor: theme.colors.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: theme.borderRadii.m,
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    tintColor: 'black',
    opacity: 0.3,
    transform: [{rotateZ: '90deg'}],
  },
  content: {
    paddingHorizontal: theme.spacing.m,
    justifyContent: 'space-between',
    flex: 1,
  },
}));
