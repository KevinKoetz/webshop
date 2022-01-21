import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebShop from "./WebShop";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import UserContextProvider from "./components/UserContext/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Switch>
          <Route path="/">
            <WebShop />
            <Route path="/login">
              <Login />
              <LogoutButton />
            </Route>
          </Route>
        </Switch>
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
