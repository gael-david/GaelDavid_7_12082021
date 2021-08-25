import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landing/LandingPage";
import FeedPage from "./pages/feed/FeedPage";
import Header from "./common/components/Header";
import GlobalLayout from "./common/components/GlobalLayout";
import { PrivateRoute } from "./common/components/PrivateRoute";
import { PublicRoute } from "./common/components/PublicRoute";

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    background: rgb(21, 32, 43);
    color: white;
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  input {
    color: white;
    font-size: 1.6rem;
    background: none;
    border: none;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router>
        <GlobalLayout>
          <Header />
          <Switch>
            <PrivateRoute component={<FeedPage />} redirectComponent={<LandingPage />} path="/" exact />
            {/* <PrivateRoute component={Profile} path="/profile" /> */}
            <PublicRoute component={<Register />} path="/register" />
            <PublicRoute component={<Login />} path="/login" />
          </Switch>
        </GlobalLayout>
      </Router>
    </>
  );
}

export default App;
