import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

//*************************************
// CONFIGURAÇÕES DO FIREBASE
//*************************************

const firebaseConfig = {
    apiKey: "AIza***************", // Substitua por uma chave genérica
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

// EXPORTAÇÃO PADRÃO DO FIREBASE
export default firebase;
