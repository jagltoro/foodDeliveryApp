import * as React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ThemeConfig} from '@src/Config';
import {BackgroundPattern} from '@src/Assets';
import {createStyles} from '@src/Config/Theme/createStyles';

interface ScreenContainerProps {
  isRotated?: boolean;
  children: React.ReactNode;
}

export const ScreenContainer = ({
  isRotated = false,
  children,
}: ScreenContainerProps) => {
  const styles = useScreenContainerStyle();

  return (
    <View style={styles.container}>
      {isRotated ? (
        <Image source={BackgroundPattern} style={styles.backgroundRotated} />
      ) : (
        <>
          <Image source={BackgroundPattern} style={styles.background} />
          <LinearGradient
            colors={['transparent', '#000000']}
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.5}}
          />
        </>
      )}
      {children}
    </View>
  );
};

export const useScreenContainerStyle = createStyles(
  (theme: ThemeConfig.Theme) => ({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      paddingHorizontal: theme.spacing.l,
    },
    backgroundRotated: {
      position: 'absolute',
      top: -450,
      right: -250,
      transform: [{rotateZ: '30deg'}],
      opacity: 0.3,
    },
    linearGradient: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    background: {
      position: 'absolute',
      top: -40,
      opacity: 0.3,
    },
  }),
);
