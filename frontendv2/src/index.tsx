import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot} from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";


const domNode = document.getElementById('root') as HTMLElement
const root = createRoot(domNode) 

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-leddoa8c1xzu7p1w.us.auth0.com" //dev-leddoa8c1xzu7p1w.us.auth0.com
      clientId="QbnvQnCYtQnzt6NSU22LVsL11MMuOfzW"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: `http://grdnr.com`,
        scope: "read:write",
      }}
    >
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
