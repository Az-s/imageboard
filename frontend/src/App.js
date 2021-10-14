import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar/NavBar';
import Messages from './container/Messages/Messages';
import NewMessages from './container/NewMessage/NewMessages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <NavBar />
        <Route path="/" exact component={Messages} />
        <Route path="/messages/new" component={NewMessages} />
      </Router>
    </div>
  );
}

export default App;
