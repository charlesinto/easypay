import React, { Component } from 'react';
import { View } from 'react-native';

class CardRow extends Component{
    render(){
        const { containerStyle } = styles
        return (
            <View style={[ containerStyle, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        width:'100%',
        flexDirection: 'row',
        marginTop: 16,
        marginBotom: 32
    }
}

export default CardRow;