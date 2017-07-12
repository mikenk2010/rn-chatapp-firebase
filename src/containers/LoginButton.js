
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Text } from 'react-native';
import { login } from '../actions';

class LoginButton extends Component {
    onLogin = () => {
        this.props.dispatch(login());
    }

    render() {
        return (
            <Button styleName="light" onPress={this.onLogin} title="Start Chatting" />
        )
    }
}

export default connect()(LoginButton);
