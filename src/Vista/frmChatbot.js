import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import BottomBar from './BottomBar';
import { sharedStyles } from './styles';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E6F6',
    },
    sharedStyles,
});

// Configura Dialogflow
Dialogflow_V2.setConfiguration(
    dialogflowConfig.client_email,
    dialogflowConfig.private_key,
    Dialogflow_V2.LANG_SPANISH,
    dialogflowConfig.project_id
);

class Chatbot extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
        };
    }

    async sendMessage(text) {
        Dialogflow_V2.requestQuery(
            text,
            result => {
                let message = {
                    _id: Math.round(Math.random() * 1000000),
                    text: result.queryResult.fulfillmentMessages[0].text.text[0],
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://s3.us-east-2.amazonaws.com/biotec-io/robot.png',
                    },
                };
    
                this.setState(previousState => ({
                    messages: GiftedChat.append(previousState.messages, message),
                }));
            },
            error => console.error('Error al enviar el mensaje:', error)
        );
    }
    

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    
        let message = messages[0];
        this.sendMessage(message.text);
    }
    

    UNSAFE_componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hola, ¿en qué puedo ayudarte?',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        //avatar: 'https://s3.us-east-2.amazonaws.com/biotec-io/robot.png',
                    },
                },
            ],
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={sharedStyles.espacioSuperior}></View>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
                <BottomBar />
            </View>
        );
    }
}

export default Chatbot;
