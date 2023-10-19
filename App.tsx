import React from 'react';
import {KeyboardAvoidingView, StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';

import {ThemeConfig} from '@src/Config';

import RootRouter from './src/Routes/RootRouter';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ThemeProvider theme={ThemeConfig.theme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootRouter />
        </ThemeProvider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;
