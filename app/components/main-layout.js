import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from './nav';


const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Nav loggedIn={this.props.data.loggedIn} history={this.props.history} location={this.props.location} dispatch={this.props.dispatch} />
        { this.props.children }
      </div>
    );
  }
});

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(MainLayout);