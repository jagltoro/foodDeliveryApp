import {createStyles} from '@src/Config/Theme/createStyles';

import {ThemeConfig} from '@src/Config';

export const useAuthenticationStyle = createStyles(
  (theme: ThemeConfig.Theme) => ({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    background: {
      position: 'absolute',
      top: -40,
      opacity: 0.3,
    },
    backgroundRotated: {
      position: 'absolute',
      top: -450,
      right: -250,
      transform: [{rotateZ: '30deg'}],
      opacity: 0.3,
    },
    titleContainer: {
      width: '100%',
      marginBottom: 25,
    },
    linearGradient: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    information: {
      flex: 1 / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      flex: 2 / 4,
      width: '100%',
      paddingVertical: 10,
      backgroundColor: '#000000',
    },
    buttonsContainerRow: {
      flex: 1 / 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonsContainer: {
      flex: 1 / 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialLogin: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    continueWithSocial: {
      marginTop: 20,
      fontSize: 12,
      fontFamily: 'BentonSans-Bold',
      color: theme.colors.white,
    },
    buttonSocialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonSocial: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
      marginTop: 20,
      paddingVertical: 15,
      paddingHorizontal: 35,
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: 15,
      maxHeight: 60,
    },
    socialIcon: {
      width: 25,
      height: 25,
    },
    forgotPassword: {
      fontSize: 12,
      fontFamily: 'BentonSans-Bold',
      color: theme.colors.green,
      marginTop: 20,
      textDecorationLine: 'underline',
    },
    buttonText: {
      fontSize: 16,
      fontFamily: 'BentonSans-Bold',
      color: theme.colors.white,
      fontWeight: 'bold',
    },
    inputCode: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: 15,
      color: theme.colors.white,
      paddingVertical: 15,
      paddingHorizontal: 28,
      marginBottom: 15,
      fontSize: 40,
      textAlign: 'center',
    },
    checkView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 6,
    },
  }),
);
