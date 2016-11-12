import React, { Component } from 'react';
import Saved from "../components/Saved"
// import Navbar from "../components/Navbar"
import Search from "../components/Search"
import Main from "../components/Main"


class Home extends Component {
	render() {
		return(
			<div id="homeDiv" className="wrapper">
				<div className="row">
					<div id="headerDiv" className="container-fluid">asas</div>
				</div>	
				
				<div className="row">
					<div className="container-fluid">
						<Search/>
					</div>
				</div>	

				<div className="row">
					<div className="container-fluid">	
						<Main/>
					</div>
				</div>

				
				<div className="row">
					<div className="container-fluid">
						<Saved/>
					</div>	
				</div>
					
			</div> //wrapper container
			)
	}
}


export default Home;
