import * as React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {createStyles} from '@src/Config/Theme/createStyles';
import {ThemeConfig} from '@src/Config';

export const Input = ({style, ...props}: TextInputProps) => {
  const styles = useStyles();
  return <TextInput style={[styles.input, style]} {...props} />;
};

export const useStyles = createStyles((theme: ThemeConfig.Theme) => ({
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: theme.borderRadii.m,
    width: '100%',
    color: theme.colors.white,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    marginBottom: theme.spacing.m,
  },
}));
