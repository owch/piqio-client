import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  	render() {		
      console.log(this.props.loggedIn);
  		const navButtons = this.props.loggedIn ? (
          <div>
              <Link to="/dashboard" className="btn btn--login btn--nav">Dashboard</Link>
              <Link to="/login" className="btn btn--login btn--nav">Logout</Link>
          </div>
        ) : (
        <div>
              <Link to="/register" className="btn btn--login btn--nav">Register</Link>
              <Link to="/login" className="btn btn--login btn--nav">Login</Link>
          </div>
        ) ;

	    return(
	      <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">Piqio Demo</h1></Link>          
          { navButtons }
        </div>
      </div>
	    );
	}
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
}
// Wrap the component to inject dispatch and state into it
export default Nav;