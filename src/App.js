import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAoBVOcd_Ub8w2O45sSMuZnn7abR4-808Q',
      authDomain: 'employeemanager-7efcc.firebaseapp.com',
      databaseURL: 'https://employeemanager-7efcc.firebaseio.com',
      projectId: 'employeemanager-7efcc',
      storageBucket: '',
      messagingSenderId: '471900758069'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
