import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './components/Header';

import history from './services/history';
import store from './store';

export default function App() {
 return (
   <Provider store={store}>
    <Router history={history}>
      <Header/>
      <Routes/>
    </Router>     
   </Provider>
 );
}