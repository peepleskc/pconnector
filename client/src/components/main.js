import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Account from './account';
import Legal from './legal';
import About from './about';
import Register from './register';
import Profile from './profile';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/account" component={Account}/>
    <Route path="/legal" component={Legal}/>
    <Route path="/about" component={About}/>
    <Route path="/register" component={Register}/>
    <Route path="/profile" component={Profile}/>
  </Switch>
)

export default Main;
