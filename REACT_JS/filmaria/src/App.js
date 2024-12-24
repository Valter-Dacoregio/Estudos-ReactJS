import React, { Component } from 'react';
import Routes from './routes';
import './style.css';

// https://sujeitoprogramador.com/r-api/?api=filmes

class App extends Component{
    render(){
        return(
            <div className="app">
                <Routes />
            </div>
        );
    }
}

export default App;