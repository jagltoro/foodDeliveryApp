import * as React from 'react';
import {Image, Pressable} from 'react-native';

import {notificationIcon} from '@src/Assets';

import {ThemeConfig} from '@src/Config';
import {createStyles} from '@src/Config/Theme/createStyles';

export const Notification = () => {
  const styles = useNotificationStyle();

  return (
    <Pressable style={styles.container}>
      <Image source={notificationIcon} />
    </Pressable>
  );
};

export const useNotificationStyle = createStyles(
  (theme: ThemeConfig.Theme) => ({
    container: {
      backgroundColor: theme.colors.buttonSecondary,
      padding: theme.spacing.m,
      borderRadius: theme.borderRadii.m,
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);
