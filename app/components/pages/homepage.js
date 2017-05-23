import React, { Component } from 'react';

class HomePage extends Component {
	render() {
		return <div className="content"> 
				<div className="content-wrapper">
					<article>
					<div>
						<section className="text-section">
							<h1 className="article-heading">Welcome to Piqio, you are not logged in!</h1>
						</section>
					</div>
					</article>
				</div>
			</div>;
	}
}

export default HomePage; 