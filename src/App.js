import "./App.css";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Table from "./screens/Table";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
