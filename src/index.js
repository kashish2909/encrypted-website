import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyCgMkjvVZECEOfZV4_Fn7cfheONkAY3CiE",
    authDomain: "aniket-6dc68.firebaseapp.com",
    databaseURL: "https://aniket-6dc68.firebaseio.com",
    projectId: "aniket-6dc68",
    storageBucket: "aniket-6dc68.appspot.com",
    messagingSenderId: "233435350236"
  };
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

