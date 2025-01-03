import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './login.css';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.entrar = this.entrar.bind(this);
    }

    componentDidMount(){
        // VERIFICA SE TEM ALGUM USUÁRIO LOGADO
        if(firebase.getCurrent())
            return this.props.history.replace('/dashboard');
    }

    entrar(e){
        this.login();

        e.preventDefault();
    }

    login = async () => {
        const {email, password} = this.state;

        try{
            await firebase.login(email, password)
            .then(()=> {
                this.props.history.replace('/dashboard');
            })
            .catch((error)=> {
                if(error.code === 'auth/user-not-found'){
                    alert('Este usuário não existe');
                } else if(error.code === 'auth/invalid-email'){
                    alert('Email inválido!');
                } else{
                    alert('Código de erro: ' + error.code);
                }
            });
        }catch(error){
            alert(error.message);
        } 
    }

    render(){
        return(
            <div>
                <form onSubmit={this.entrar} id="login">
                    <label>Email:</label>
                    <br/>
                    <input type="email" autoComplete="off" autoFocus value={this.state.email} 
                        onChange={(e)=> this.setState({email: e.target.value})} placeholder="teste@teste.com" />
                    <br/>
                    <label>Password:</label>
                    <br/>
                    <input type="password" autoComplete="off" value={this.state.password} 
                        onChange={(e)=> this.setState({password: e.target.value})} placeholder="Sua senha" />
                    <br/>

                    <button type="submit">Entrar</button>

                    <Link to="/register">Ainda não possui uma conta?</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);