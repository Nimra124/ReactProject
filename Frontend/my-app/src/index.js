import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./ReduxToolKit/store";
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 
  <Provider store={store}>
      <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN} 
    clientId={process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </Auth0Provider>
  </Provider>
 
);

reportWebVitals();
