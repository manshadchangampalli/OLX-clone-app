import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './Firebase/context/FirebaseContext'
import  firebase from './Firebase/Config'

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('root'));
