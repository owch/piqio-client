import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { login } from '../../actions/app-actions';

class LoginPage extends Component {

	_login(e) {
		e.preventDefault();		

		var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
		
		var me = this;		

		this.props.dispatch(login(username, password));
	}

	render() {				
		return (
			 <div className="content"> 
				<div className="content-wrapper">
				    <form className="form-signin">       
				      <h2 className="form-signin-heading">Please login</h2>
				      <input type="text" id="username" ref="username" className="form-control username" placeholder="Email Address" required="" autoFocus="" />
				      <input type="password" id="password" ref="password" className="form-control password" placeholder="Password" required=""/>      					      
				      <button className="btn btn-lg btn-primary btn-block login-button" type="submit" onClick={this._login.bind(this) }>Login</button>   

				      <h2 className="form-signin-heading">Or</h2>
				  	  <button className="btn btn-lg btn-block google-login-page" type="submit">Login with Google</button>   
				    </form>					    
				</div>
			</div>			
			);
	}	
}



// Which props do we want to inject, given the global state?
function select(state) {

	return {
	   data: state
	};
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(LoginPage);