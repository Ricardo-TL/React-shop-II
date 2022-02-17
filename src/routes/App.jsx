import React from 'react';
import {BrowserRouter, Swith, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
          <Layout>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/Recovery-password' component={RecoveryPassword}/>
            <Route component={NotFound}/>
          </Layout>
        </BrowserRouter>
    )
}

export default App;

