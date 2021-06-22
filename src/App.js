import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import Exercises from './components/Exercises/Exercises';
import Programs from './components/Programs/Programs';
import Workouts from './components/Workouts/Workouts';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
//import RoutePrivate from './hoc/RoutePrivate';


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
          <Route path="/exercises" component={Exercises} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/programs" component={Programs} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
