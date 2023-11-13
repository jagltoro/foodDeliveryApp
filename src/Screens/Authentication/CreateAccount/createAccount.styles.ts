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
      width: '100%',
      marginTop: theme.spacing.xl,
      paddingTop: theme.spacing.xl,
      marginBottom: theme.spacing.l,
      justifyContent: 'flex-start',
    },
    form: {
      flex: 1,
      paddingVertical: theme.spacing.s,
      backgroundColor: '#000000',
      borderWidth: 1,
      borderColor: 'green',
    },
    buttonsContainer: {
      position: 'absolute',
      bottom: theme.spacing.s,
      right: theme.spacing.s,
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
