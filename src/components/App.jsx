import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import MessageInput from "./MessageInput";
import MessageBoard from "./MessageBoard";
import { Switch, Route } from 'react-router-dom';
import LoginForm from "./LoginForm"

function App(props){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={MessageBoard} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
