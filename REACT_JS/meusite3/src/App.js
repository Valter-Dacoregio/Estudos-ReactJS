import React, { Component } from 'react';
import Header from './components/header';
// import Home from './pages/Home';
import Routes from './routes';

class App extends Component{
    render(){
        return(
            <div>
                <Routes />
            </div>
        );
    }
}

export default App;