import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { login } from '../../actions/app-actions';

class FormPage extends Component {

	_login(e) {
		e.preventDefault();		

		var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
		
		var me = this;		

		this.props.dispatch(login(username, password));
	}

	render() {				
		console.log("query: ");
		console.log(this.props.location.query);
		return (
			 <div className="content"> 
				<div className="content-wrapper">
					<form>
					  <h1>New Piqio Watch</h1>
					  <div className="form-group">
					    <label for="formGroupExampleInput">The URL address of the page you want to monitor</label>
					    <input type="text" ref="url" className="form-control" placeholder="www.example.com" required="" value={this.props.location.query.url}/>
					  </div>
					  
					  <div className="form-group">
					    <label for="formGroupExampleInput">Element Selector</label>
					    <input type="text" ref="selector" className="form-control" placeholder="Example Selector" required="" value={this.props.location.query.selector}/>
					  </div>
					  
					  <div className="form-group">
					    <label for="formGroupExampleInput">Contents of the element selected</label>
					    <input type="text" ref="content" className="form-control" placeholder="Selected Content" required="" />
					  </div>
					  
					  
					  <div className="row">
					  	<div className="col-sm-6">
					  	  	<label for="formGroupExampleInput">Type of Element being monitored</label>
						  	<select ref="" className="form-control form-control-lg" id="inlineFormCustomSelect">
							    <option value="1">Number</option>
								<option value="2">String</option>
						  	</select>
						</div>

						<div className="col-sm-6">
					  	  	<label for="formGroupExampleInput">How frequent do you want to poll?</label>
						  	<select className="form-control form-control-lg" id="inlineFormCustomSelect">
							    <option value="1">5 seconds</option>
								<option value="2">15 seconds</option>
								<option value="3">30 seconds</option>
								<option value="4">60 seconds</option>
						  	</select>
						</div>
					  </div>

					  <h1>Notifications</h1>

					  <div className="form-group">
				  	  	<label for="formGroupExampleInput">Notification method</label>
					  	<select className="form-control form-control-lg" id="inlineFormCustomSelect">
						    <option value="1">Email</option>
						    <option value="2">Chrome notification</option>
							<option value="3">Piqio mobile app</option>
					  	</select>
					  </div>


					  <div className="form-group">
				  	  	<label for="formGroupExampleInput">Notification conditions</label>
					  	<select className="form-control form-control-lg" id="inlineFormCustomSelect">
						    <option value="1">Text Change</option>
					  	</select>
					  </div>

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
export default connect(select)(FormPage);