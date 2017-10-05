import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import MessageInput from "./MessageInput";
import MessageBoard from "./MessageBoard";
import { Switch, Route } from 'react-router-dom';
import Login from "./Login"

function App(props){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={MessageBoard} />
          <Route path="/login" component={Login} />
        </Switch>
      <MessageBoard/>
      <MessageInput/>
      <Footer/>
    </div>
  );
}

export default App;
