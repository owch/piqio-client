import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlerts, getAlertHistory } from '../../actions/app-actions';
import rd3 from 'react-d3';
import { Link } from 'react-router';

var LineChart = rd3.LineChart;

class Dashboard extends Component {
  componentDidMount() {
      var userId = this.props.data.userid;
      var authToken = this.props.data.authtoken;
      var alerts;
      var me = this;
      getAlerts(authToken, function(results) {
        me.setState({
          alerts: results
        });
      });
  }

  constructor(props) {
    super(props);
    this.state = {alerts: []};
  }

  render() {    
    var alerts = this.state.alerts;
    var listAlerts = alerts.map(function(listItems){
      var itemName = String(listItems.name);            
      var listId = listItems.id;
      var url = "/dashboard/" + listId;

      return (
        <div>          
          <h3> <Link to={url} activeClassName="active"> {itemName} </Link> </h3>
        </div>
        );
    });  

    return (
      <div className="content"> 
        <div className="content-wrapper">
          <h2 className="form-signin-heading">Dashboard</h2>
          {listAlerts}
        </div>
      </div>
      );    

    // return (
    //   <div className="content"> 
    //     <div className="content-wrapper">
    //       <h2 className="form-signin-heading">Dashboard</h2>
    //       <LineChart
    //             legend={true}
    //             data={lineData}
    //             width='100%'
    //             height={400}
    //             viewBoxObject={{
    //               x: 0,
    //               y: 0,
    //               width: 500,
    //               height: 400
    //             }}
    //             title="Graph 1"
    //             yAxisLabel="Value"
    //             xAxisLabel="Time"
    //             domain={{x: [,6], y: [-10,]}}
    //             gridHorizontal={true}
    //           />
    //     </div>
    //   </div>
    //   ); 
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