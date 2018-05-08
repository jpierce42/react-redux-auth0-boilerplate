import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import Auth from '../services/auth/Auth';
import Callback from '../components/Callback';
import Home from '../pages/home/Home';
import RecipesPage from '../pages/recipes/RecipesPage';
import TopNav from '../layouts/TopNav'

import './App.css';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <TopNav
          auth={auth}
        />

        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
        <Route path="/recipes" render={(props) => <RecipesPage auth={auth} {...props} />} />

      </div>
    );
  }
}

export default App;
