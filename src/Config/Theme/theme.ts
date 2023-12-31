import {createTheme} from '@shopify/restyle';
import {textVariants} from './textVariants';
import {buttonVariants} from './buttonVariants';

const palette = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#000000',
  background: '#000000',
  card: '#000000',
  text: '#FFFFFF',
  border: '#FFFFFF',
  notification: '#FFFFFF',
  green: '#15BE77',
  orange: '#DA6317',
  buttonPrimary: '#15BE77',
  buttonSecondary: 'rgba(255,255,255,0.1)',
  buttonBack: 'rgba(255,144,18,0.1)',
  tabBarBg: '#252525',
};

export const theme = createTheme({
  colors: {
    ...palette,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants,
  buttonVariants,
});

export type Theme = typeof theme;
