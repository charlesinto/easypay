import React from 'react';
import { View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const InputTag = ({
    label, value, onChangeText, placeholder, autoCorrect, autoCapitalize,
     keyboardType, secureTextEntry, style }) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
       <View style={[containerStyle, style]}>
            {/* <Text style={labelStyle}>
                {label.toString().charAt(0).toUpperCase() + label.toString().slice(1)}

            </Text> */}
            <TextInput 
            secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText}
            style={inputStyle} placeholder={placeholder} autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize || 'none'} keyboardType={keyboardType || 'default'} />
            
            
       </View>
    );
};

const styles = {
    inputStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 12,
        color: '#000',
        fontSize: 18,
        flex:2,
        
        
    },
    labelStyle: {
        paddingLeft: 10,
        fontSize: 18,
        flex: 1,
        color: '#000'
    },
    containerStyle: {
        flex: 1,
        marginBottom: 0,
        alignItems: 'center',
        // height: 40,
        flexDirection: 'row'
    }
}

export { InputTag };

