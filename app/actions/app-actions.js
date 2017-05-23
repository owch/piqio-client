import { browserHistory } from 'react-router';
import axios from 'axios';

export function login(username, password) {	
	axios.post('http://127.0.0.1:3001/login', {
	    email: username,
	    password: password
	  })
	  .then(function (response) {
	    console.log(response);
	    browserHistory.push('/dashboard');
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}

function forwardTo(location) {
  
  Router.browserHistory.push(location);
}