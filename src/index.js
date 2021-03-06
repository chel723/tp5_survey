// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import orange from 'material-ui/colors/orange';
import { ThemeProvider } from 'styled-components';

import { MAIN_COLOR, SECONDARY_COLOR } from './colors';

import Layout from './components/Layout';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
  },
});

const styledTheme = {
  main: MAIN_COLOR,
  accent: SECONDARY_COLOR,
};

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={styledTheme}>
      <Router>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
        </Router>
    </ThemeProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
