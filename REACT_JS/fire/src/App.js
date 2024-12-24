import React, { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nomeInput: '',
      idadeInput: '',
      token: 'Carregando...',
      nome: '',
      idade: ''
    };

    this.cadastrar = this.cadastrar.bind(this);

    //*************************************
    // CONFIGURAÇÕES DO FIREBASE
    //*************************************

    var firebaseConfig = {
      apiKey: "AIza***************",
      authDomain: "seuapp.firebaseapp.com",
      projectId: "seuapp",
      storageBucket: "seuapp.appspot.com",
      messagingSenderId: "1234567890",
      appId: "1:1234567890:web:abcdefghij123456",
      measurementId: "G-XXXXXXXXXX"
    };

    // NECESSÁRIO COLOCAR ESTA VERIFICAÇÃO PARA NÃO DUPLICAR APLICAÇÃO
    if (!firebase.apps.length) { 
      firebase.initializeApp(firebaseConfig);
    }
    if (firebase.analytics) {
      firebase.analytics();
    }
  }

  componentDidMount() {
    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });
  }

  cadastrar(e) {
    let usuarios = firebase.database().ref('usuarios');
    let chave = usuarios.push().key;

    usuarios.child(chave).set({
      nome: this.state.nomeInput,
      idade: this.state.idadeInput
    });

    e.preventDefault();
  }

  render() {
    const { token, nome, idade } = this.state;
    return (
      <div>
        <form onSubmit={this.cadastrar}>
          <input
            type="text"
            value={this.state.nomeInput}
            onChange={(e) => this.setState({ nomeInput: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={this.state.idadeInput}
            onChange={(e) => this.setState({ idadeInput: e.target.value })}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>

        <h1>Token: {token} </h1>
        <h1>Nome: {nome} </h1>
        <h1>Idade: {idade} </h1>
      </div>
    );
  }
}
