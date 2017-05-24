import { browserHistory } from 'react-router';
import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE, SET_USER_ID, SET_EMAIL, SET_AUTH_TOKEN, ngrokUrl } from '../constants/app-constants';
import axios from 'axios';
import $ from 'jquery';

export function login(username, password, location) {	
	return (dispatch) => {		
		var encodedData = window.btoa(username + ':' + password);

		$.ajax
		  ({
		    type: "GET",
		    url: ngrokUrl + "/api/users/me",
		    dataType: 'json',
		    async: false,
		    data: '{}',
		    beforeSend: function (xhr){ 
		        xhr.setRequestHeader('Authorization', "Basic " + encodedData); 
		    },
		    success: function (data){
		        console.log(data);
		        dispatch(setAuthState(true));
		        dispatch(setEmail(data.user.email));
		        dispatch(setUserId(data.user.id));
		        dispatch(setAuthToken(data.user.token));

				if (location.state && location.state.nextPathname) {
					browserHistory.push({
						pathname: location.state.nextPathname,
						search: location.state.nextSearch
					})
				} else {
					browserHistory.push('/dashboard')
				}
		    }
		});		
	}	
}

export function register(username, password) {	
	return (dispatch) => {		
		axios.post(ngrokUrl + '/api/users/', {
		    email: username,
		    password: password,
		    "group":"admin"
		  })
		  .then(function (response) {
		    console.log(response);
		    var data = response.data;
		    dispatch(setAuthState(true));
		    dispatch(setEmail(data.user.email));
	        dispatch(setUserId(data.user.id));
	        dispatch(setAuthToken(data.user.token));
		    browserHistory.push('/dashboard');
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}

export function logout() {
	return (dispatch) => {
		dispatch(setAuthState(false));		
		dispatch(setEmail(''));
        dispatch(setUserId(''));
        dispatch(setAuthToken(''));
        browserHistory.push('/');
	}
}

export function getAlerts(token, callback) {	
	axios.get(ngrokUrl + '/api/alerts/', {
	    headers: {'Authorization' : 'Bearer ' + token},	    	    
	  })
	  .then(function (response) {
	    console.log(response);
	    var data = response.data;
	    callback(data.alerts);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}


/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(newState) {
  return { type: SET_AUTH, newState };
}

export function setAuthToken(newState) {
  return { type: SET_AUTH_TOKEN, newState };
}


export function setUserId(newState) {
  return { type: SET_USER_ID, newState };
}


export function setEmail(newState) {
  return { type: SET_EMAIL, newState };
}


function forwardTo(location) {  
	browserHistory.push(location);
}