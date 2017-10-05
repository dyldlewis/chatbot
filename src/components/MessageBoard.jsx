import React from "react";
import { connect } from "react-redux";
import UserMessage from "./UserMessage"
import ApiMessage from "./ApiMessage";



class MessageBoard extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.masterUserMessageList);
  }


  render() {

    var boardStyle = {
      border: "solid black 1px",
      width: "500px",
      height: "200px"
    }

    var messageStyle = {
      float: "right",
      color: "blue",
      border: "solid grey 1px"
    }

    var apiMessageStyle = {
      color: "red",
      float: "left",
      border: "solid grey 1px"
    }

    return(
      <div style={boardStyle}>
        {this.props.masterUserMessageList.userMessage.map((userMessage) =>
          <div style={messageStyle}>
            <UserMessage
              userMessage={userMessage}
              key={userMessage.id}
              />
          </div>
          )}
        <br/>
          {this.props.masterUserMessageList.apiMessage.map((apiMessage) =>
            <div style={apiMessageStyle}>
              <ApiMessage
                apiMessage={apiMessage}
                key={apiMessage.id}
                />
            </div>
            )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterUserMessageList : state
  };
};

export default connect(mapStateToProps)(MessageBoard);
