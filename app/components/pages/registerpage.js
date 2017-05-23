import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { register } from '../../actions/app-actions';

class RegisterPage extends Component {
	_register(e) {
		e.preventDefault();
		console.log("here");

		var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
		
		var me = this;		

		this.props.dispatch(register(username, password));
	}

	render() {
		return (
			 <div className="content"> 
				<div className="content-wrapper">
					<div className="login-wrapper">
					    <form className="form-signin">       
					      <h2 className="form-signin-heading">Sign up</h2>
					      <input type="text" id="username" ref="username" className="form-control username" placeholder="Email Address" required="" autoFocus="" />
					      <input type="password" id="password" ref="password" className="form-control password" placeholder="Password" required=""/>      					      
					      <button className="btn btn-lg btn-primary btn-block login-button" type="submit" onClick={this._register.bind(this) }>Register</button>   					      
					    </form>					    
					  </div>					  
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
export default connect(select)(RegisterPage);