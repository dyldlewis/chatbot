import React from "react";
import PropTypes from "prop-types";


function UserMessage(props) {
  return(
    <div>
      {userMessage.message}
    </div>
  )
}


UserMessage.propTypes = {
  userMessage: PropTypes.object
}
