import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './Firebase/context/FirebaseContext'
import  firebase from './Firebase/Config'
import Context from './Firebase/context/FirebaseContext'

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
        <App />
        </Context>
    </FirebaseContext.Provider>
    , document.getElementById('root'));
