import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Notifications extends Component {
    render(){
        return (
            <View>
                <Text>
                    Notifications
                </Text>
            </View>
        );
    }
}

export default connect(null, actions)(Notifications);
