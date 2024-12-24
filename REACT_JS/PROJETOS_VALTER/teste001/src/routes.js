import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header';
import Erro from './pages/Erro';
import Home from './pages/home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}