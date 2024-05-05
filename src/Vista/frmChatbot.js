import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import BottomBar from './BottomBar';
import { sharedStyles } from './styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E6F6',
    },
    sharedStyles,
});

class Chatbot extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
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
            avatar: 'https://s3.us-east-2.amazonaws.com/biotec-io/robot.png',
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