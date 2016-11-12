import React from 'react';
// import {Link} from 'react-router';


const Search = props => (
	<div id="Searchjs" className="panel panel-default">
		<div className="panel-heading">Search for Articles</div>

		<div className="panel-body">
			  	<div className="panel text-center"> 
				<h3>Topic</h3>
				<form onSubmit={props.handleSubmit}>
					<input 
					onChange={props.handleChange}
					placeholder="Enter Topic"
					/>
					
				</form>
			</div>
			<div className="panel text-center"> 
				<h3>Start Year</h3>
				<form onSubmit={props.handleSubmit}>
					<input
					onChange={props.handleChange}
					placeholder="Enter Start Year"
					/>
					
				</form>
			</div>
			<div className="panel text-center"> 
				<h3>End Year</h3>
				<form onSubmit={props.handleSubmit}>
					<input
					onChange={props.handleChange}
					placeholder="Enter End Year"
					/>
				</form>
				<button className="btn btn-success">Search</button>
			</div>

		</div>



	</div>
	)

export default Search;

