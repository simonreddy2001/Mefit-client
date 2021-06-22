import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Exercises from './components/Exercises/Exercises';
import Programs from './components/Programs/Programs';
import Workouts from './components/Workouts/Workouts';
import Profile from './components/Profile/Profile';
//import Register from './components/Register/Register';
import { useKeycloak } from './context/KeycloakContext';
import { useEffect } from 'react';
//import RoutePrivate from './hoc/RoutePrivate';


function App() {
  const { redirectToDashboard, initialising } = useKeycloak()
  const history = useHistory()
  useEffect(() => {

    if (redirectToDashboard === null && initialising === true) return;

    if (redirectToDashboard === true) {
      history.push('/dashboard')
    }

  }, [ redirectToDashboard, history])
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          {/*<Route path="/register" component={Register} />*/}
          <Route path="/dashboard" component={Dashboard} />
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
