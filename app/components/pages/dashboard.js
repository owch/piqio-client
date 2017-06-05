import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlerts } from '../../actions/app-actions';
import rd3 from 'react-d3';

var LineChart = rd3.LineChart;

class Dashboard extends Component { 
  componentDidMount() {      
      var userId = this.props.data.userid;
      var authToken = this.props.data.authtoken;
      alert(authtoken)
      getAlerts(authToken, function(alerts) {
        console.log(alerts);
      });
  }

  render() {
    var lineData = [
        { 
          name: 'line',
          values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
          strokeWidth: 3          
        }
      ];    

    return (
      <div className="content"> 
        <div className="content-wrapper">
          <h2 className="form-signin-heading">Dashboard</h2>
          <LineChart
                legend={true}
                data={lineData}
                width='100%'
                height={400}
                viewBoxObject={{
                  x: 0,
                  y: 0,
                  width: 500,
                  height: 400
                }}
                title="Graph 1"
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

// Wrap the component to inject dispatch and state into it
export default connect(select)(Dashboard);