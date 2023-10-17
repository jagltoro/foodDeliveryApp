import * as React from 'react';
import {Pressable} from 'react-native';
import {
  useRestyle,
  spacing,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions,
} from '@shopify/restyle';

import {Theme, ThemedText} from '@src/Config/Theme';

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
};

export const Button = ({onPress, label, ...rest}: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Pressable onPress={onPress} {...props}>
      <ThemedText variant="buttonLabel">{label}</ThemedText>
    </Pressable>
  );
};
