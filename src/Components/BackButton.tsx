import * as React from 'react';
import {Image, Pressable, StyleProp, ViewStyle} from 'react-native';

import {backOrangeIcon} from '@src/Assets';
import {createStyles} from '@src/Config/Theme';
import {ThemeConfig} from '@src/Config';

interface BackButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BackButton = ({onPress, style}: BackButtonProps) => {
  const styles = useStyle();

  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Image source={backOrangeIcon} />
    </Pressable>
  );
};

const useStyle = createStyles((theme: ThemeConfig.Theme) => ({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.buttonBack,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadii.s,
    position: 'absolute',
    top: theme.spacing.m,
    left: 0,
  },
}));
