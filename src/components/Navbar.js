import React from 'react';
import {Link} from 'react-router';


const Navbar = props => (
	<div id="Navbarjs" className="panel panel-default text-center">
		<div className="panel-heading">NavBar</div>
			<p><Link to="/">
				Go to Home
			</Link>
			|
			<Link to="/Giphy">
				Go to Giphy
			</Link></p>

	</div>
	)

export default Navbar;

