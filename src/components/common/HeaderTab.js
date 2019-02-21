import React, { Component } from 'react'
import { Header, Body, Title } from 'native-base';
import { View } from 'react-native'

class HeaderTab extends Component{
    render(){
        return (
            <Header style={{backgroundColor: '#ff5722'}}  androidStatusBarColor='#c41c00'>
                <Body>
                    <View style={{marginLeft: 10 }}>
                        <Title>
                            
                            hijinini
                        </Title>
                    </View>
                </Body>
            </Header>
        )
    }
}

export default Header;
