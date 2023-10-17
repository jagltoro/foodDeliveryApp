export type ThemeContextType = {
  theme: 'light' | 'dark';
  updateTheme: (theme: ThemeContextType['theme']) => void;
};
