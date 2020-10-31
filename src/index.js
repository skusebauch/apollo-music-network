import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';

import theme from './theme';
import client from './graphql/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
