import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDccAp3QEEt4xqSufBWQ5WAZZ1T7qVuBLU',
            authDomain: 'authentication-596d8.firebaseapp.com',
            databaseURL: 'https://authentication-596d8.firebaseio.com',
            projectId: 'authentication-596d8',
            storageBucket: 'authentication-596d8.appspot.com',
            messagingSenderId: '862486279853'
        });
        
        //Denna övervakar typ? fett weird
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    //Custom för android, kanske inte ens är den smarrigaste lösningen
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
