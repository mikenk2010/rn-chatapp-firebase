
import React from 'react';
import {View, Text} from 'react-native'
import { connect } from 'react-redux';

import MessageList from '../components/MessageList';
import { updateMessagesHeight } from '../actions';

const mapStateToProps = (state) => ({
    messages: state.chatroom.messages,
    isFetching: state.chatroom.meta.isFetching
});

const Messages = connect(
    mapStateToProps
)(({ messages, isFetching, dispatch }) => {
  console.log("------------")
  console.log(messages)
    if (isFetching) {
        return (
            <View style={{paddingTop: 50,
                          paddingBottom: 50}}>
                <Text>Loading....</Text>
            </View>
        )
    }else{
        return <MessageList messages={messages}
                            style={{minHeight: 100}}
                            onLayout={(event) => dispatch(updateMessagesHeight(event))} />
    }
});

export default Messages;
