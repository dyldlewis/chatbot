import React from "react";
import PropTypes from "prop-types";


function UserMessage(props) {
  return(
    <div>
      {props.userMessage.message}
    </div>
  )
}


UserMessage.propTypes = {
  userMessage: PropTypes.object
}

export default UserMessage;
