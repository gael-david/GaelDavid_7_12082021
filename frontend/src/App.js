import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landing/LandingPage";
import Feed from "./pages/feed/Feed";
import Header from "./common/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
