import React from "react";
import PropTypes from "prop-types";


function ApiMessage(props) {
  return(
    <div>
      {props.apiMessage.message}
    </div>
  )
}


ApiMessage.propTypes = {
  apiMessage: PropTypes.object
}

export default ApiMessage;
