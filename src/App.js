import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Signin from "./Components/Pages/Sigin/Signin";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Register from "./Components/Pages/Register/Register";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={Signin} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
