import {createStyles} from '@src/Config/Theme/createStyles';

import {ThemeConfig} from '@src/Config';

export const useHomeStyle = createStyles((theme: ThemeConfig.Theme) => ({
  container: {
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexShrink: 1,
    marginBottom: theme.spacing.l,
  },
}));
