import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Página Sobre...</h2>
                <br />
                <Link to="/">Ir para Home</Link>
            </div>
        );
    }
}

export default Sobre;