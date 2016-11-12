import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

getInitialState(event) {
		return {
			topic: "",
			startyear: 2010,
			endyear: 2016
		}
	}

  handleChange(event) {
    var newState={};
    newState[event.target.id]=event.target.value;
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="panel panel-default">
		<div className="panel-heading">Saved Articles</div>

			<div className="panel-body text-center">
				<form>
					<div className="form-group">
						<h4 className=""><strong>Topic</strong></h4>
						<input type="text" value={this.state.value} className="form-control " id="topic" placeholder="Enter Topic" onChange= {this.handleChange} required/>

						<h4 className=""><strong>Start Year</strong></h4>
						<input type="number" value={this.state.value} className="form-control " id="startyear" placeholder="Start Year" onChange= {this.handleChange} required/>

						<h4 className=""><strong>End Year</strong></h4>
						<input type="number" value={this.state.value} className="form-control " id="endyear" placeholder="End Year" onChange= {this.handleChange} required/>
						<input type="submit" value="Submit" />
					</div>

				</form>
			</div>
			
	  </div>
      
    );
  }
}

export default Search;
