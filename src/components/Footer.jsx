import React from "react";

function Footer(props) {

  var style = {
    backgroundColor: "lightblue",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

  return(
    <div style={style}>
        <p>Chatbot is a product of the almighty Dylan Lewis</p>
    </div>
  )
}

export default Footer;
