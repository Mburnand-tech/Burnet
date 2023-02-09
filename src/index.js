import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserLoggedIn } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserLoggedIn>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserLoggedIn>
);

