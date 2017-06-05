import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlertHistory } from '../../actions/app-actions';
import rd3 from 'react-d3';

var LineChart = rd3.LineChart;

class AlertPage extends Component { 
  componentDidMount() {      
      var userId = this.props.data.userid;
      var authToken = this.props.data.authtoken;
      var alertId = this.props.params.alertId        
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
    this.state = {histories: []};
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
  		for (var i = histories.length - 100; i < histories.length; i++) {
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