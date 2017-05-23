import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import HomePage from './components/pages/homepage';
import LoginPage from './components/pages/loginpage';
import RegisterPage from './components/pages/registerpage';
import Dashboard from './components/pages/dashboard';

function requireAuth(nextState, replaceState) {
	//if not logged in
  if (true) {
	replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }    
}

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      	<Route path="/" component={HomePage} />

      	<Route path="login" component={LoginPage}/>
      	<Route path="register" component={RegisterPage}/>
		<Route path="dashboard" component={Dashboard} onEnter={requireAuth}/>
    </Route>
  </Router>
);
