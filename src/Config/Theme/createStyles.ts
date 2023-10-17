import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Theme} from './theme';

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const createStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
