import React from "react";
import { connect } from "react-redux";
import UserMessage from "./UserMessage"



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
    
    return(
      <div style={boardStyle}>
        {this.props.masterUserMessageList.userMessage.map((userMessage) =>
          <UserMessage
          userMessage={userMessage}
          key={userMessage.id}
          />
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
