import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserLoggedIn } from './contexts/UserContext';
import { Theme } from './contexts/themeContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserLoggedIn>
    <Theme>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Theme>
  </UserLoggedIn>
);

