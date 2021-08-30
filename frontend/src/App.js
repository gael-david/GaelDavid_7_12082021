import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import RegisterPage from "./features/register/RegisterPage";
import LoginPage from "./features/login/pages/LoginPage";
import LandingPage from "./features/landing/pages/LandingPage";
import FeedPage from "./features/feed/pages/FeedPage";
import UserPage from "./features/user/pages/UserPage";
import GlobalLayout from "./common/components/layouts/GlobalLayout";
import { PrivateRoute } from "./common/components/routes/PrivateRoute";
import { PublicRoute } from "./common/components/routes/PublicRoute";

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

  * {
    font-family: 'Inter', sans-serif;
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
          <Switch>
            <PrivateRoute component={<FeedPage />} redirectComponent={<LandingPage />} path="/" exact />
            <PrivateRoute component={<UserPage />} path="/user/:id" />
            <PublicRoute component={<RegisterPage />} path="/register" />
            <PublicRoute component={<LoginPage />} path="/login" />
          </Switch>
        </GlobalLayout>
      </Router>
    </>
  );
}

export default App;
