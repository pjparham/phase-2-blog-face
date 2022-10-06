import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain="dev-cl14-1gr.us.auth0.com" clientId="F9AUVCCmffVaNuSJ04O1hhCCzgW3y2dJ" redirectUri={window.location.origin}>
    <Router>
     <App />
    </Router>
  </Auth0Provider>
);


