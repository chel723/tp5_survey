// @flow

import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

// import pages
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const Root = styled.div`
  width: '100%';
`;

const Container = styled.div`
  padding: 20px;
`;

class Layout extends Component {
  render() {
    return (
      <Root>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              ReactJS Survey
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Redirect path="/" exact to="/accueil" />
            <Route path="/accueil" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </Root>
    );
  }
}

export default Layout;
