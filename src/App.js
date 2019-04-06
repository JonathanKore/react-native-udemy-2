import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDccAp3QEEt4xqSufBWQ5WAZZ1T7qVuBLU',
            authDomain: 'authentication-596d8.firebaseapp.com',
            databaseURL: 'https://authentication-596d8.firebaseio.com',
            projectId: 'authentication-596d8',
            storageBucket: 'authentication-596d8.appspot.com',
            messagingSenderId: '862486279853'
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
