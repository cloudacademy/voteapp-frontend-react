import React, { Component } from 'react';
import axios from 'axios'

class Vote extends Component{
  constructor () {
    super();

    //configure the APIHOSTPORT, this is the public IP address of the host that the API server is running on
    this.APIHOSTPORT = `${process.env.REACT_APP_APIHOSTPORT}`;

    this.state = {
      vote: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    //implement the handleClick function which will be called when the user clicks on the voting button
    //this invokes an AJAX request to the API to vote on the current programming language
    var url = `http://${this.APIHOSTPORT}/languages/${this.props.id}/vote`;
    axios.get(url)
      .then(response => this.setState({vote: this.state.vote+1}))
  }

  render () {
    //provide implementation for the render function to render the HTML for the Vote component
    return (
      <div id={this.props.id}>
        <button className='button' onClick={this.handleClick} type="button" class="btn btn-outline-success">+1</button>
        <div>
          <b>Votes</b>: {this.state.vote}
        </div>
      </div>
    )
  }
}

//export the Vote class, allows the ProgrammingLanguage component to import it
export default Vote;