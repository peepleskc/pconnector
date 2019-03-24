import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './App.css';

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl';

import Main from './components/main'

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
    <Provider store = { store }>
      <Router>
        <div className="page">
          <div className="demo-big-content">
              <Layout>
                  <Header className="header-color" title="Pianotes" scroll>
                      <Navigation>
                          <Link to="/">Home</Link>
                          <Link to="/account">Account</Link>
                          <Link to="/legal">Terms</Link>
                          <Link to="/about">About</Link>
                      </Navigation>
                  </Header>
                  <Drawer title="Pianotes">
                    <Navigation>
                          <Link to="/">Home</Link>
                          <Link to="/account">Account</Link>
                          <Link to="/legal">Terms</Link>
                          <Link to="/about">About</Link>
                    </Navigation>
                  </Drawer>
                  <Content>
                      <Main/>
                      <div className="page-content" />
                  </Content>
              </Layout>
          </div>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
