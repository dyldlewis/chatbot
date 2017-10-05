import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import MessageInput from "./MessageInput";
import MessageBoard from "./MessageBoard";

function App(props){
  return (
    <div>
      <Header/>
      <MessageBoard/>
      <MessageInput/>
      <Footer/>
    </div>
  );
}

export default App;
