
import React, { Component } from 'react';
import {View, Text, Image, FlatList} from 'react-native'

import moment from 'moment';

const Message = ({ msg }) => (
    <View>

    
    </View>
);

const MessageList = ({ messages, onLayout }) => (
    <FlatList data={messages}
              autoHideHeader={true}
              renderItem={msg => <Message msg={msg} />}
              onLayout={onLayout}
              />
);

export default MessageList;
