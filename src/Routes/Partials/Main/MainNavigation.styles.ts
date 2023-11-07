import {createStyles} from '@src/Config/Theme/createStyles';

import {ThemeConfig} from '@src/Config';

export const useMainNavigationStyle = createStyles(
  (theme: ThemeConfig.Theme) => ({
    tabBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.s,
      paddingVertical: theme.spacing.s,
      borderRadius: theme.borderRadii.s,
      backgroundColor: theme.colors.tabBarBg,
    },
    tabBarItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.s,
      paddingVertical: theme.spacing.s,
    },
    tabBarItemActive: {
      borderRadius: theme.borderRadii.s,
      backgroundColor: '#53E88B1A',
    },
    tabBarItemIcon: {
      height: 20,
      width: 20,
      objectFit: 'contain',
    },
    tabBarItemIconActive: {
      marginRight: theme.spacing.s,
    },
    tabBarItemText: {
      color: theme.colors.text,
    },
  }),
);
