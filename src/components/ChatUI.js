
import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {View, Text, TextInput, Button} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Messages from '../containers/Messages';
import Input from '../containers/Input';
import { sendMessage } from '../actions';

import firebase from '../firebase';

const mapStateToProps = (state) => ({
    chatHeight: state.chatroom.meta.height,
    user: state.user
});

class ChatUI extends Component {
    state = {
        scrollViewHeight: 0,
        inputHeight: 0,
        text: ''
    }

    componentDidMount() {
        this.scrollToBottom(false);
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    onScrollViewLayout = (event) => {
        const layout = event.nativeEvent.layout;

        this.setState({
            scrollViewHeight: layout.height
        });
    }

    onInputLayout = (event) => {
        const layout = event.nativeEvent.layout;

        this.setState({
            inputHeight: layout.height
        });
    }

    scrollToBottom(animate = true) {
        const { scrollViewHeight, inputHeight } = this.state,
              { chatHeight } = this.props;

        const scrollTo = chatHeight - scrollViewHeight + inputHeight;

        if (scrollTo > 0) {
           this.refs.scroll.scrollToPosition(0, scrollTo, animate)
        }
    }

    _scrollToInput(reactRef) {

    }


    sendMessage = () => {
      console.log("MSG SENDING: ", this.state.text)
      var text = this.state.text
      firebase.database()
              .ref(`messages/text`)
              .set({
                  text
              });
    }

    render() {
        return (
            <View>
                <Text styleName="h-center" style={{paddingTop: 20}}>
                    Global Chatroom
                </Text>
                <KeyboardAwareScrollView ref="scroll"
                                         onLayout={this.onScrollViewLayout}>
                    <Messages />
                    <TextInput onLayout={this.onInputLayout}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                            />
                      <Button title="Send" onPress={this.sendMessage} />
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default connect(mapStateToProps)(ChatUI);
