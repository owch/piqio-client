import React from 'react';
import { Link } from 'react-router';
import Nav from './nav';

const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Nav />
        { this.props.children }
      </div>
    );
  }
});

export default MainLayout;
