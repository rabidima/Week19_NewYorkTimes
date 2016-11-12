import React from 'react';
import {Link} from 'react-router';


const Saved = props => (
	<div id="Savedjs" className="panel panel-default text-center">
		<div className="panel-heading">Saved</div>
			<p><Link to="/">
				Go to Home
			</Link>
			|
			<Link to="/Giphy">
				Go to Giphy
			</Link></p>

	</div>
	)

export default Saved;

