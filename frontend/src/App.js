import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landing/LandingPage";
import FeedPage from "./pages/feed/FeedPage";
import Header from "./common/components/Header";
import { PrivateRoute } from "./common/components/PrivateRoute";
import { PublicRoute } from "./common/components/PublicRoute";

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: Verdana;
//     background: #06061d;
//     color: white;
//   }

//   a {
//     color: white;
//     text-decoration: none;
//   }
// `;

function App() {
  return (
    <>
      {/* <Reset /> */}
      {/* <GlobalStyle /> */}
      <Router>
        <div>
          <Header />
          <Switch>
            <PrivateRoute component={<FeedPage />} redirectComponent={<LandingPage />} path="/" exact />
            {/* <PrivateRoute component={Profile} path="/profile" /> */}
            <PublicRoute component={<Register />} path="/register" />
            <PublicRoute component={<Login />} path="/login" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
