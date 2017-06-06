import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlertHistory } from '../../actions/app-actions';
import rd3 from 'react-d3';

var LineChart = rd3.LineChart;

class AlertPage extends Component { 
  componentDidMount() {    
  	this.setState({
  		userId: this.props.data.userid,
  		authToken: this.props.data.authtoken,
  		alertId: this.props.params.alertId
  	})  
  	this.startPolling();
  }

  componentWillMount() {
  	if (this._timer) {
        clearInterval(this._timer);
        this._timer = null;
	}
  }

  startPolling() {
    var self = this;
  	self._timer = setInterval(self.sync , 3000);
  }

  sync () {
  	  var userId = this.state.userId;
      var authToken = this.state.authToken;
      var alertId = this.state.alertId        
      var me = this;
      
      getAlertHistory(authToken , alertId , function(history) {                         
      	var graphHistory = history.graphableHistory;      	
      	console.log(graphHistory);
      	me.setState({
          histories: graphHistory
      	})
      }); 
  }

  constructor(props) {
    super(props);
    this.state = {histories: [], userId: '', authToken: '', alertId: ''};
    this.sync = this.sync.bind(this);
  }

  render() {  
  	var valueList = [];  	
  	var histories = this.state.histories;

  	var maxX = 0;
  	var maxY = 0;  	  	

  	if (histories.length == 0) {
  		valueList.push({x: 0, y: 0});  		
  	}
  	else {
  		for (var i = 0; i < histories.length; i++) {
	  		var point = Object.values(histories[i])[0];
	  		valueList.push({x: i, y: point});  		
	  	}	
  	}
  	
	console.log(valueList);	

	var lineData = [
        { 
          name: "line",
          values: valueList,
          strokeWidth: 3          
        }
      ];     



    return (
		<div className="content"> 
	        <div className="content-wrapper">
	          <h2 className="form-signin-heading"> Graph </h2>	          	          
	          <LineChart
				legend={false}
				data={lineData}
				width='100%'
				height={400}
				viewBoxObject={{
				  x: 0,
				  y: 0,
				  width: 500,
				  height: 400
				}}
				title=""
				yAxisLabel="Value"
				xAxisLabel="Time"
				domain={{x: [,6], y: [-10,]}}
				gridHorizontal={true}
				/>
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


export default connect(select)(AlertPage);