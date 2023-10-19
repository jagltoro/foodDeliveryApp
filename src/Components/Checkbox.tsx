import * as React from 'react';
import {Image, Text, Pressable, ViewStyle, StyleProp} from 'react-native';

import {createStyles} from '@src/Config/Theme/createStyles';

import {ThemeConfig} from '@src/Config';

import {checkIcon, checkedIcon} from '@src/Assets';

interface CheckboxProps {
  onPress: () => void;
  label: string;
  checked?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Checkbox = ({onPress, label, checked, style}: CheckboxProps) => {
  const styles = useStyles();

  return (
    <Pressable onPress={onPress} style={[styles.checkView, style]}>
      <Image source={checked ? checkedIcon : checkIcon} style={styles.icon} />
      <Text>{label}</Text>
    </Pressable>
  );
};

export const useStyles = createStyles((theme: ThemeConfig.Theme) => ({
  checkView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.s,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: theme.spacing.s,
  },
}));
