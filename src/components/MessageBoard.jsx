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
      border: "solid lightblue 5px",
      width: "60%",
      height: "200px",
      marginTop: "200px",
      textAlign: "center",
      borderRadius: "10",
      marginRight: "350px"
    }

    var userMapStyle = {
      float: "right"
    }

    var apiMapStyle = {
      float: "left"
    }

    var messageStyle = {
      float: "right",
      color: "white",
      border: "solid blue 1px",
      borderRadius: "10",
      padding: "3px",
      backgroundColor: "blue",
      marginRight: "3px",
      marginTop: "3px",
    }

    var apiMessageStyle = {
      color: "white",
      float: "left",
      border: "solid red 1px",
      borderRadius: "10",
      padding: "3px",
      backgroundColor: "red",
      marginLeft: "3px",
      marginTop: "3px"
    }

    return(
      <div style={boardStyle}>
        <div>
        {this.props.masterUserMessageList.userMessage.map((userMessage) =>
          <div>
            <div style={messageStyle}>
              <UserMessage
                userMessage={userMessage}
                key={userMessage.id}
                />
            </div>
            <br/>
          </div>
          )}
        </div>
        <br/>
        <div>
          {this.props.masterUserMessageList.apiMessage.map((apiMessage) =>
            <div style={apiMessageStyle}>
              <ApiMessage
                apiMessage={apiMessage}
                key={apiMessage.id}
                />
            </div>
            )}
          </div>
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
