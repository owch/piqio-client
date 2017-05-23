import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
	render() {
		return (
			 <div className="content"> 
				<div className="content-wrapper">
					<div className="login-wrapper">
					    <form className="form-signin">       
					      <h2 className="form-signin-heading">Sign up</h2>
					      <input type="text" className="form-control username" placeholder="Email Address" required="" autoFocus="" />
					      <input type="password" className="form-control password" placeholder="Password" required=""/>      					      
					      <button className="btn btn-lg btn-primary btn-block login-button" type="submit">Register</button>   					      
					    </form>					    
					  </div>					  
				</div>
			</div>			
			);
	}
}

export default RegisterPage; 