
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';

import Input from '../containers/Input';
import LoginButton from '../containers/LoginButton';
import { setUserName, setUserAvatar } from '../actions';

const mapStateToProps = (state) => ({
    authorizing: state.user.authorizing
});

class LoginUI extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Who are you?</Text>


                <Input placeholder="Your name here"
                       submitAction={setUserName}
                       submitOnBlur
                       noclear
                       ref="username"/>

                <Input placeholder="Your avatar URL here"
                       submitAction={setUserAvatar}
                       submitOnBlur
                       noclear
                       ref="avatar"/>


                <LoginButton />
            </View>
        );
    }
}

export default connect(mapStateToProps)(LoginUI);
