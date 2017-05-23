import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  	render() {		
  		const navButtons = (
  			<div>
	          	<Link to="/register" className="btn btn--login btn--nav">Register</Link>
	          	<Link to="/login" className="btn btn--login btn--nav">Login</Link>
        	</div>
        );

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

// Wrap the component to inject dispatch and state into it
export default Nav;