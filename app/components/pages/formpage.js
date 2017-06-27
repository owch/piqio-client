import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setAlert } from '../../actions/app-actions';

class FormPage extends Component {

	_subForm(e) {
		e.preventDefault();		
		var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
		var url = ReactDOM.findDOMNode(this.refs.url).value.trim();
		var selector = ReactDOM.findDOMNode(this.refs.selector).value.trim();
		var selectedElement = ReactDOM.findDOMNode(this.refs.selectedElement).value.trim();
		var elementType = ReactDOM.findDOMNode(this.refs.elementType).value.trim();
		var frequency = ReactDOM.findDOMNode(this.refs.frequency).value.trim();
		var pollingRate;

		switch(frequency) {
		    case 1:
		        pollingRate = 5;
		        break;
		    case 2:
		        pollingRate = 15;
		        break;
		    case 3:
		        pollingRate = 30;
		        break;
		    case 4:
		    default:
		        pollingRate = 60;
		}

		var notification = ReactDOM.findDOMNode(this.refs.notification).value.trim();
		var condition = ReactDOM.findDOMNode(this.refs.condition).value.trim();
		
		var authToken = this.props.data.authtoken;
		setAlert(authToken, name, url, selector, pollingRate, "email,push")
		var me = this;

		//this.props.dispatch(login(username, password));
	}

	render() {				
		return (
			 <div className="content"> 
				<div className="content-wrapper">
					<form>
					  <h1>New Piqio Watch</h1>
					  
					  <div className="form-group">
					    <label for="formGroupExampleInput">Name of Piqio Watch</label>
					    <input type="text" ref="name" className="form-control" placeholder="Sample Name" required="" />
					  </div>
					  
					  <div className="form-group">
					    <label for="formGroupExampleInput">The URL address of the page you want to monitor</label>
					    <input type="text" ref="url" className="form-control" placeholder="www.example.com" required="" defaultValue={this.props.location.query.url}/>
					  </div>
					  
					  <div className="form-group">
					    <label for="formGroupExampleInput">Element Selector</label>
					    <input type="text" ref="selector" className="form-control" placeholder="Example Selector" required="" defaultValue={this.props.location.query.selector}/>
					  </div>
					  
					  <div className="form-group">
					    <label for="formGroupExampleInput">Contents of the element selected</label>
					    <input type="text" ref="selectedElement" className="form-control" placeholder="Selected Content" required="" />
					  </div>
					  
					  
					  <div className="row">
					  	<div className="col-sm-6">
					  	  	<label for="formGroupExampleInput">Type of Element being monitored</label>
						  	<select ref="elementType" className="form-control form-control-lg" id="inlineFormCustomSelect">
							    <option value="1">Number</option>
								<option value="2">String</option>
						  	</select>
						</div>

						<div className="col-sm-6">
					  	  	<label for="formGroupExampleInput">How frequent do you want to poll?</label>
						  	<select ref="frequency" className="form-control form-control-lg" id="inlineFormCustomSelect">
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
					  	<select ref="notification" className="form-control form-control-lg" id="inlineFormCustomSelect">
						    <option value="1">Email</option>
						    <option value="2">Chrome notification</option>
							<option value="3">Piqio mobile app</option>
					  	</select>
					  </div>


					  <div className="form-group">
				  	  	<label for="formGroupExampleInput">Notification conditions</label>
					  	<select ref="condition" className="form-control form-control-lg" id="inlineFormCustomSelect">
						    <option value="1">Text Change</option>
					  	</select>
					  </div>

					  <button className="btn btn-lg btn-primary btn-block login-button" type="submit" onClick={this._subForm.bind(this) }>Create New Watch</button> 

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
