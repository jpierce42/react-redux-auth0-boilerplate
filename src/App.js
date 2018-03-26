import React, { Component } from 'react'

import TopNav from './layouts/TopNav'

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <TopNav
          auth={this.props.auth}
        />
      </div>
    );
  }
}

export default App;
