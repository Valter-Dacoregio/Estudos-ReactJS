import React, { Component } from 'react';
import firebase from './fireConnection';

export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      nome: '',
      email: '',
      senha: '',
      user: null
    };

    
    this.auth = this.auth.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);

    // firebase.auth().signOut();
    // 
    // firebase.auth().onAuthStateChanged((user)=>{
    //   if(user){
    //     firebase.database().ref('usuarios').child(user.uid).set({
    //       nome: this.state.nome
    //     })
    //     .then(()=>{
    //       this.setState({nome: '', email: '', senha: ''});
    //     });
    //   }
    // });
  }

  componentDidMount(){
    this.auth();
  }

  auth(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user: user});
      }
    });
  }
  
  // logar(e){
    
    // CRIAR USUÁRIO COM E-MAIL E SENHA

    // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    // .catch((error) => {
    //   if(error.code === 'auth/invalid-email'){
    //     alert('Email inválido!');
    //   } else if(error.code === 'auth/weak-password'){
    //     alert('Senha Fraca!');
    //   } else {
    //     alert('Código de erro: ' + error.code);
    //   }
    // });
    //
    // e.preventDefault();

    
    // LOGAR COM E-MAIL E SENHA

    // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    // .catch((error) => {
    //   if(error.code === 'auth/wrong-password'){
    //     alert('Senha incorreta!');
    //   } else {
    //     alert('Código de erro: ' + error.code);
    //   }
    // });
    // 
    // e.preventDefault();

  // }

  cadastrar() {

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) => {
      alert('Código de erro: ' + error.code);
    });
    
    // e.preventDefault();
  }

  logar() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) => {
      alert('Código de erro: ' + error.code);
    });
  }

  sair() {
    firebase.auth().signOut()
    .then(()=>{
      this.setState({user: null});
      alert('Deslogado com sucesso!');
    })
    ;

  }

  render(){
    return(
      <div>
        {this.state.user ?
          <div>
            <p>Painel Admin</p>
            <p>Seja bem vindo :)</p>
            <p>{this.state.user.email}</p>
            <button onClick={this.sair}>Sair</button>
          </div>
        :
          <div>
            <h1>Seja bem-vindo</h1>
            <label>Email:</label><br/>
            <input type="text" value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})} /><br/>

            <label>Senha:</label><br/>
            <input type="text" value={this.state.senha}
              onChange={(e) => this.setState({senha: e.target.value})} /><br/>
            
            <button onClick={this.cadastrar}>Cadastrar</button>
            <button onClick={this.logar}>Logar</button>
          </div>
        }
      </div>
    );
  }
}