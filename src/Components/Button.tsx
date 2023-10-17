import * as React from 'react';
import {ThemedButton, ThemedText} from '@src/Config/Theme';
import {textVariants} from '@src/Config/Theme/textVariants';
import {buttonVariants} from '@src/Config/Theme/buttonVariants';

interface ButtonProps {
  onPress: () => void;
  label: string;
  buttonVariant: keyof typeof buttonVariants;
  textVariant: keyof typeof textVariants;
}

export const Button = ({
  onPress,
  label,
  buttonVariant,
  textVariant,
}: ButtonProps) => {
  return (
    <ThemedButton variant={buttonVariant} onPress={onPress}>
      <ThemedText variant={textVariant}>{label}</ThemedText>
    </ThemedButton>
  );
};
