import React from 'react';
import { View } from 'react-native';

const styles = {
    containerStyle: {
        flexDirection: 'row',
        lineHeight: 10,
        position: 'relative'
    }
};

const LoginCardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

export { LoginCardSection };
