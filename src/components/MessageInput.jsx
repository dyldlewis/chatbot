import React from "react";
import { Button, TextInput } from 'react-desktop/macOs';
import { getMessage } from "./../actions";
import { connect } from "react-redux";

class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(){
    event.preventDefault();
    const { _message } = this.refs;
    this.props.dispatch(getMessage(_message))
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
          ref="_message"
          placeholder="My Input"
          id="name"
          type="text"
        /><button type="submit">Send</button>
    </form>
      </div>
    )
  }
}

export default connect()(MessageInput);
