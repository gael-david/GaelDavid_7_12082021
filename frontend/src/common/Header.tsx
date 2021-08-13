import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/landing">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
    </nav>
  );
}
