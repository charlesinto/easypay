import React, { Component } from 'react';
import { View, TextInput, Picker,ScrollView, KeyboardAvoidingView } from 'react-native';
import { 
    Container, Header, Icon, Text, Button, Title, Body, Content,
     Card, CardItem,Left, Right
} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PaymentSuccesful extends Component{
    constructor(){
        super();
        this.gotToPrev = this.gotToPrev.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }
    gotToPrev(){
        this.props.gotToPrev();
    }
    goToHome(){
        this.props.goToHome();
    }
    render(){
        const { inputStyle, labelStyle, containerStyle } = styles
        return (
            <Container>
                        <Header style={{backgroundColor: '#ff5722'}}  androidStatusBarColor='#c41c00'>
                                <Left>
                                    <Button onPress={this.gotToPrev} transparent>
                                        <Icon name='arrow-round-back' style={{fontSize:27, color:'#fff'}} />
                                    </Button>
                                </Left>
                                <Body>
                                    <View 
                                    style={{marginLeft: 10, flex:1, flexDirection:'column', 
                                    justifyContent:'center', alignItems:'center' }}>
                                        <Title>
                                            Transaction
                                        </Title>
                                    </View>
                                </Body>
                            </Header>
                            
                <Content contentContainerStyle={{flex: 1, height:'100%'}} style={{flex: 1, height:'100%'}}>
                    <View style={containerStyle}>
                        <View 
                            style={{flex: 4, height: '50%', 
                            flexDirection:'row', justifyContent:'center', alignItems:'center'}}

                        >
                            <Text style={{color:'#000', fontSize:18, fontWeight:'600'}}>
                                Transaction Successful
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Button rounded full 
                                style={{backgroundColor:'#22CAFF'}} onPress={this.goToHome}>
                                <Text>Continue</Text>
                            </Button>
                        </View>
                    </View>    
                </Content>           
            </Container>
           
        )
    }
}

const styles = {
    inputStyle: {
        borderColor:'#A9A9A9', 
        borderWidth: 1, 
        borderRadius: 5, 
        marginBottom:16, 
        marginTop:16
    },
    labelStyle: {
        fontWeight: '500'
    },
    containerStyle: {
        flex: 1,
        flexDirection:'column',
        margin:10,
        height: '100%'
    }
}

export default connect(null,actions)(PaymentSuccesful);
