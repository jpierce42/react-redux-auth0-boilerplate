import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Auth from './services/auth/Auth';
import Callback from './components/Callback';
import Home from './pages/home/Home';
import history from './history';
import Recipes from './pages/recipes/Recipes';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
        <Route path="/recipes" render={(props) => <Recipes auth={auth} {...props} />} />
      </div>
    </Router>
  );
}
