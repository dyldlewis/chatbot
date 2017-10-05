import React from "react"
import { Link } from "react-router-dom";


var navStyle = {
  float: "right",
  color: "black",
  marginRight: "10%"
}

var navBarStyle = {
  color: "black",
  marginRight: "10%"
}

var headerStyle = {
  backgroundColor: "lightblue",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  top: 0,
  height: "60px",
  width: "100%",
  marginRight: "50px"
}

var logoStyle = {
  width: "60px",
  height: "60px",
  position: "fixed",
  left: "3%"
}

var logoTextStyle = {
  position: "fixed",
  left: "12%",
  color: "e6e6e6",
}
function Header(props) {
  return (
    <div style={headerStyle}>
      <div style={navStyle}>
        <img style={logoStyle} src="http://cdn.shopify.com/s/files/1/1061/1924/products/Robot_Emoji_Icon_abe1111a-1293-4668-bdf9-9ceb05cff58e_grande.png?v=1485573487"/>
        <h1 style={logoTextStyle}>Chatbot</h1>
        <h3><Link style={navBarStyle} to="/">Messages</Link>
        <Link style={navBarStyle} to="/login">Login</Link>
        <Link style={navBarStyle} to="/about">About</Link>
        <Link style={navBarStyle} to="/profile">Profile</Link>
        </h3>
      </div>
    </div>
  )
}

export default Header;
