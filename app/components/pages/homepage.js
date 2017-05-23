import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
	render() {
		const { loggedIn, email } = this.props.data;

		return <div className="content"> 
				<div className="content-wrapper">
					<article>
					<div>
						<section className="text-section">
							{loggedIn ? (
								<h1 className="article-heading">Welcome to Piqio, {email} you are logged in!</h1>
								)
							: (
								<h1 className="article-heading">Welcome to Piqio, Please log in!</h1>
								)
							}
						</section>
					</div>
					</article>
				</div>
			</div>;
	}
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);