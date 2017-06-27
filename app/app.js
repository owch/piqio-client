import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import HomePage from './components/pages/homepage';
import LoginPage from './components/pages/loginpage';
import RegisterPage from './components/pages/registerpage';
import Dashboard from './components/pages/dashboard';
import FormPage from './components/pages/formpage';
import AlertPage from './components/pages/alertpage';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loginToken } from './actions/app-actions';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(homeReducer);


require("../css/components/_nav.css");
require("../css/components/_buttons.css");
require("../css/components/_loginpage.css");
require("../css/components/_mainpage.css");
require("../css/main.css");

function requireAuth(nextState, replace) {	

	let { loggedIn } = store.getState();
	console.log(store.getState());
	//if not logged in
	if (! loggedIn) {
		const token = localStorage.getItem('token');
		console.log("Token:" + token)

		if (token != null) {
			store.dispatch(loginToken(token));
		}		
		else {
			replace({
				pathname: '/login',
				state: {
					nextPathname: nextState.location.pathname,
					nextSearch: nextState.location.search
				}
			})
		}		
	}    
}

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(	
  <Provider store={store}>
	  <Router history={browserHistory}>
	    <Route component={MainLayout}>
	      	<Route path="/" component={HomePage} />
	      	<Route path="login" component={LoginPage}/>
	      	<Route path="register" component={RegisterPage}/>
			<Route path="form*" component={FormPage} onEnter={requireAuth}/>
			<Route path="dashboard" onEnter={requireAuth} component={Dashboard}/>
			<Route path="dashboard/:alertId" onEnter={requireAuth} component={AlertPage}/>
	    </Route>
	  </Router>
 	</Provider>,
  document.getElementById('root')
);
