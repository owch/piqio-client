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

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


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
		replace({
			pathname: '/login',
			state: {
				nextPathname: nextState.location.pathname,
				nextSearch: nextState.location.search
			}
		})
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
			<Route path="dashboard" component={Dashboard} onEnter={requireAuth}/>
	    </Route>
	  </Router>
 	</Provider>,
  document.getElementById('root')
);
