import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase';

import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import New from './components/New';
import Register from './components/Register';
import './global.css';

class App extends Component{

  state = {
    firebaseInitialized: false
  };

  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      this.setState({firebaseInitialized: resultado});
    });
  }

  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/new" component={New} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}

export default App;
