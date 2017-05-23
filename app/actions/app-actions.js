import { browserHistory } from 'react-router';
import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE } from '../constants/app-constants';
import axios from 'axios';

export function login(username, password) {	
	return (dispatch) => {
		var success = true;
		dispatch(setAuthState(success));
		forwardTo('/dashboard');
	}

	// axios.post('http://127.0.0.1:3001/login', {
	//     email: username,
	//     password: password
	//   })
	//   .then(function (response) {
	//     console.log(response);
	//     browserHistory.push('/dashboard');
	//   })
	//   .catch(function (error) {
	//     console.log(error);
	//   });
}

export function register(username, password) {	
	return (dispatch) => {
		const ngrokUrl = "http://501d6d3f.ngrok.io";


		axios.post(ngrokUrl + '/api/users/', {
		    email: username,
		    password: password,
		    "group":"admin"
		  })
		  .then(function (response) {
		    console.log(response);
		    dispatch(setAuthState(success));
		    browserHistory.push('/dashboard');
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}


/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(newState) {
  return { type: SET_AUTH, newState };
}


function forwardTo(location) {  
	browserHistory.push(location);
}