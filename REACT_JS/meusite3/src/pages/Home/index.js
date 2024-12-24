import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Bem-vindo a página home...</h2>
                <br />
                <Link to="/Sobre">Ir para Sobre</Link>
            </div>
        );
    }
}

export default Home;