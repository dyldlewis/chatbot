import React from "react";
import { Button, TextInput } from 'react-desktop/macOs';
import { getMessage } from "./../actions";
import { connect } from "react-redux";
import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(){
    event.preventDefault();
    const { _message } = this.refs;
    this.props.dispatch(getMessage(_message.value))
    var action = {
      type: types.ADD_MESSAGE,
      message: _message.value,
      id: v4(),
      sender: "user"
    }
    this.props.dispatch(action)
    _message.value = "";
  }
  render() {

    var inputStyle = {
      display: "inline"
    }

    return(
      <div style={inputStyle}>
        <form onSubmit={this.handleSubmit}>
        <TextInput
          ref="_message"
          placeholder="My Input"
          id="name"
          type="text"
          marginRight="350px"
        />
      <br/>
      <Button color="blue" type="submit">Send</Button>
    </form>
      </div>
    )
  }
}

export default connect()(MessageInput);
