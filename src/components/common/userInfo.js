import React from 'react';
import { View, Text } from 'react-native';

const UserInfo = () => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text>
                Department
            </Text>
            <Text>
                Contact Number
            </Text>
            <Text>
                Contact Email
            </Text>
            <Text>
                Level
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'column'
    }
};

export { UserInfo };

