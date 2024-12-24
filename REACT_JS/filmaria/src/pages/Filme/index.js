import React, { Component } from 'react';
import './filme-info.css';

class Filme extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            filme: []
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filme: json});
            console.log('TESTE DO VALTER');
            console.log(json);
        })
    }

    render(){
        return(
            <div className="filme-info">
                {this.state.filme.length !== 0 &&
                    <div>
                        <h1> {this.state.filme.nome} </h1>
                        <img src={this.state.filme.foto} alt="foto" />
                        <h3>Sinopse</h3>
                        {this.state.filme.sinopse}
                    </div>
                }
                {this.state.filme.length === 0 &&
                    <h3>Ops! Não foi possível carregar o filme selecionado.</h3>
                }
            </div>
        );
    }
}

export default Filme;