import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {ThemeConfig} from '@src/Config';

import RootRouter from './src/Routes/RootRouter';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={ThemeConfig.theme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
