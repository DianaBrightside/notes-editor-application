import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

const App = () => {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path='/sign-up'>
        <SignupPage/>
      </Route>
      <Route path='/'>
        <LoginPage/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
