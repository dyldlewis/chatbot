import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import MessageInput from "./MessageInput";

function App(props){
  return (
    <div>
      <Header/>
      <MessageInput/>
      <Footer/>
    </div>
  );
}

export default App;
