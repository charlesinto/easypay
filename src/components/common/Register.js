import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Register = ({ text, onPress, style }) => {
    const { containerStyle, textStyle } = styles;
    return (
        <View style={[containerStyle, style]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={textStyle}>
                    {text.toString().charAt(0).toUpperCase() + text.toString().slice(1)}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    textStyle: {
        width: 200,
        textAlign: 'center',
        fontSize: 14
    }
};

export { Register };
