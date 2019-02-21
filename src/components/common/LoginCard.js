import React from 'react';
import { View } from 'react-native';

const style = {
    containerStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        height: 300
    }
};

const LoginCard = (props) => {

    return (
        <View style={[style.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

export { LoginCard };
