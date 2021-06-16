import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import RoutePrivate from './hoc/RoutePrivate';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <RoutePrivate path="/exercises" component={Exercises} />
          <RoutePrivate path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
