import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landing/LandingPage";
import Feed from "./pages/feed/Feed";
import Header from "./common/Header";

export const IsLoggedContext = React.createContext();

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/feed">{isLogged ? <Feed /> : <Redirect to="/login" />}</Route>
              <Route path="/register">{isLogged ? <Redirect to="/feed" /> : <Register />}</Route>
              <Route path="/login">{isLogged ? <Redirect to="/feed" /> : <Login />}</Route>
              <Route path="/landing">{isLogged ? <Redirect to="/feed" /> : <LandingPage />}</Route>
              <Route path="/">{isLogged ? <Redirect to="/feed" /> : <LandingPage />}</Route>
            </Switch>
          </div>
        </Router>
      </IsLoggedContext.Provider>
    </>
  );
}

export default App;
