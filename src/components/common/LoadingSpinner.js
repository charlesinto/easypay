import React from 'react';
import { Spinner } from 'native-base';
import { View } from 'react-native';

export const LoadingSpinner = ({ isVisible, SpinnerColor }) => {
    const { spinnerStyle } = styles;
    if( isVisible ){
        return (
            <View style={spinnerStyle}>
                <Spinner color= { SpinnerColor ? SpinnerColor : 'green'} />
            </View>
        )
    }
    return null;
    
}

const styles = {
    spinnerStyle: {
        position: 'absolute',
        top: '50%',
        left: '48%',
        zIndex: 1000
    }
}