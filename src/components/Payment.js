import React, { Component } from 'react';
import { View, TextInput, Picker,ScrollView, KeyboardAvoidingView } from 'react-native';
import { 
    Container, Header, Icon, Text, Button, Title, Body, Content,
     Card, CardItem,Left, Right
} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payment extends Component{
    constructor(){
        super();
        this.gotToPrev = this.gotToPrev.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangePin = this.onChangePin.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.procesPayment = this.procesPayment.bind(this);
    }
    gotToPrev(){
        this.props.gotToPrev();
    }
    onChangeAmount(amount){
        this.props.onChangeAmount(amount);
    }
    onChangeComment(comment){
        this.props.onChangeComment(comment);
    }
    onChangePin(pin){
        this.props.onChangePin(pin);
    }
    onValueChange(value){
        this.props.onValueChange(value);
    }
    procesPayment(){
        const { comment, pin, amount, accountType} = this.props;
        this.props.procesPayment({comment, pin, amount, accountType});
    }
    render(){
        const { inputStyle, labelStyle } = styles
        const { comment, pin, amount, accountType} = this.props;
        return (
            <Container>
                        <Header style={{backgroundColor: '#ff5722'}}  androidStatusBarColor='#c41c00'>
                                <Left>
                                    <Button onPress={this.gotToPrev} transparent>
                                        <Icon name='arrow-round-back' style={{fontSize:27, color:'#fff'}} />
                                    </Button>
                                </Left>
                                <Body>
                                    <View style={{marginLeft: 10 }}>
                                        <Title>
                                            Payment
                                        </Title>
                                    </View>
                                </Body>
                            </Header>
                            
                <Content style={{flex: 1, height:'100%'}}>
                            
                        <ScrollView style={{flex: 1}} contentContainerStyle={{flex:1}}>
                            <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
                                <View style={{flex: 1, margin: 16,height:'100%', flexDirection:'column'}}>          
                                    <Text style={labelStyle}>Select Account Type</Text>
                                    <View style={{flex:1}}>
                                        <Picker
                                            onValueChange={this.onValueChange}
                                            selectedValue={accountType}
                                            style={{ height: 100, width: '100%' }}>
                                            <Picker.Item label="Credit" value="credit" />
                                            <Picker.Item label="Savings" value="savings" />
                                            <Picker.Item label="Current" value="current" />
                                        </Picker>
                                    </View>
                                    <Text style={labelStyle}>Enter Amount</Text>
                                    <View style={inputStyle}>
                                        <TextInput  placeholder={'Amount'}
                                            keyboardType={'number-pad'}
                                            onChangeText={this.onChangeAmount}
                                            value={amount}
                                        />
                                    </View>
                                    <Text style={labelStyle}>Enter Pin</Text>
                                    <View style={inputStyle}>
                                        <TextInput placeholder={'Pin'} 
                                            keyboardType={'number-pad'}
                                            secureTextEntry
                                            onChangeText={this.onChangePin}
                                            value={pin}
                                        />
                                    </View>
                                    <Text style={labelStyle}>Comment</Text>
                                    <View style={inputStyle}>
                                        <TextInput placeholder={'comment'} 
                                            onChangeText={this.onChangeComment}
                                            value={comment}
                                        />
                                    </View>
                                    <View style={{width: '100%', marginTop: 16}}>
                                        <Button rounded full style={{backgroundColor:'#22CAFF'}} onPress={this.procesPayment}>
                                            <Text>Process Payment</Text>
                                        </Button>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
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
        fontWeight: '600'
    }
}

const mapStateToProps = state => {
    const { comment, pin, amount, accountType } = state.payment;
    return {
        comment,
        pin,
        amount,
        accountType
    }
}

export default connect(mapStateToProps,actions)(Payment);
