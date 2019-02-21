import React from 'react';
import {TouchableOpacity, Text } from 'react-native';

const ForgotPassword = ({onPress, text, style }) => {
    const { container } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[container, style]}>
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    container:{
        marginTop: 10,
        marginRight:10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
} 

export { ForgotPassword };
