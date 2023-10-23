import {createStyles} from '@src/Config/Theme/createStyles';

import {ThemeConfig} from '@src/Config';

export const useCreateAccountStyle = createStyles(
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
    backButton: {
      position: 'absolute',
      left: theme.spacing.l,
      top: theme.spacing.m,
    },
    titleContainer: {
      flex: 1 / 4,
      width: '100%',
      marginBottom: theme.spacing.l,
    },
    form: {
      flex: 2 / 4,
      width: '100%',
      paddingVertical: theme.spacing.s,
      backgroundColor: '#000000',
    },
    buttonsContainer: {
      position: 'absolute',
      bottom: 0,
    },
    checkView: {
      alignSelf: 'flex-start',
    },
    background: {
      position: 'absolute',
      top: -40,
      opacity: 0.3,
    },
    linearGradient: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  }),
);
