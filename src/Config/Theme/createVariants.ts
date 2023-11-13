import {
  VariantProps,
  createRestyleComponent,
  createText,
  createVariant,
} from '@shopify/restyle';
import {Theme} from './theme';
import {Pressable} from 'react-native';

export const Text = createText<Theme>();

export const Button = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    React.ComponentProps<typeof Pressable>,
  Theme
>([createVariant({themeKey: 'buttonVariants'})], Pressable);
