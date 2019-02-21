import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';


const FAB = ({ iconname, onPress, style }) => {
    const { containerStyle } = styles;
    return (
        <View style={[containerStyle, style]}>
            <TouchableOpacity onPress={onPress}>
                <Icon name={iconname} style={{color: '#fff', fontSize:27}}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    containerStyle: {
        position: 'absolute', 
        bottom: 20, 
        right: 20, 
        zIndex: 100, 
        elevation: 10,
        width: 56,
        height: 56,
        borderRadius: 28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    }
};

export { FAB };
