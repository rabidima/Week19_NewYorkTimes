import React, {Component} from "react";
import Navbar from '../components/Navbar';
import axios from 'axios';


class Giphy extends Component {

  constructor (props){
      super(props);
      this.state = {
          search: ""
      }
  }

  handleSubmit(e){
      e.preventDefault();
      console.log(this.state.search);
      this.setState({search:""})
  }

   handleChange(e){
      this.setState({search: e.target.value});
  }

  getThatShit(giphy) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=dc6zaTOxFJmzC`;
    console.log('url',url);

    axios.get(url, res => {
      console.log('response',res);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
     	<div id="homeDiv" className="wrapper">
        <div className="row">
          <div id="headerDiv"></div>
         </div>  
        
        <div className="row">
          <div className="container-fluid">
  	        <Navbar
  	          handleChange={this.handleChange.bind(this)}
  	          handleSubmit={this.handleSubmit.bind(this)}
  	          show={true}
  	        />
          </div>  
        </div>
     </div> 
    );
  }
}

export default Giphy;

