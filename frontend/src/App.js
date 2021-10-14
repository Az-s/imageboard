import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Messages from './container/Messages/Messages';
import NewMessages from './container/NewMessage/NewMessages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <NavBar />
        <Route path="/" exact component={Messages} />
        <Route path="/messages/new" component={NewMessages} />
      </Switch>
    </div>
  );
}

export default App;
