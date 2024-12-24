import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

    let firebaseConfig = {
        apiKey: "AIz********************",
        authDomain: "reactapp-8830a.firebaseapp.com",
        projectId: "reactapp-8830a",
        storageBucket: "reactapp-8830a.appspot.com",
        messagingSenderId: "165615470522",
        appId: "1:165615470522:web:c033f5422240b76534ff83",
        measurementId: "G-LN83ZJ8VC2"
    };
    
class Firebase{
    constructor(){
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
        // app.analytics();

        // REFERENCIANDO A DATABASE PARA ACESSAR DE OUTROS LOCAIS
        this.app = app.database();

        this.storage = app.storage();
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    logout(){
        return app.auth().signOut();
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password);

        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        });
    }

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        });
    }

    /**
     * CASO TENHA USÁRIO LOGADO,
     * RETORNA O EMAIL DO MESMO
     */
    getCurrent(){
        return app.auth().currentUser && 
                    app.auth().currentUser.email;
    }

    getCurrentUid(){
        return app.auth().currentUser && app.auth().currentUser.uid;
    }

    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }

        const uid = app.auth().currentUser.uid;

        await app.database().ref('usuarios').child(uid)
        .once('value').then(callback);
    }
}

export default new Firebase();
