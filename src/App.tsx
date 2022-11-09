import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import Routes from './routes/routes';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="default" backgroundColor={theme.colors.bgColor} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
