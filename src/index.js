import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './index.css';
import App from './App';
import { IconContext } from 'react-icons/lib';
import UserProvider from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <IconContext.Provider value={{ color: "#5a4ad1", size: 18 }}>
        <Router>
          <App />
        </Router>
      </IconContext.Provider >
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
