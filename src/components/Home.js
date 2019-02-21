import React, { Component } from 'react';
import { View, Dimension, TouchableNativeFeedback, TouchableOpacity, Alert  } from 'react-native';
import { 
    Container, Header, Icon, Text, Button, Title, Body, Content,
    Footer, FooterTab, Tabs, Card, CardItem,Left, Right
} from 'native-base';
import { connect } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import TabNavigator from './Tabs/TabNavigation';
import Menu from './common/Menu';
import HeaderTab from './common/HeaderTab';
import CardRow from './common/CardRow';
import { FAB } from './common';
import * as actions from '../actions';

class Home extends Component {
    constructor(){
        super();
        this.goToAccounts = this.goToAccounts.bind(this);
        this.initializePaymentProcess = this.initializePaymentProcess.bind(this);
        this.proceedToPaymentIfCardPresent = this.proceedToPaymentIfCardPresent.bind(this);
        this.goToPayment = this.goToPayment.bind(this);
    }
    goToAccounts(){
        this.props.goToAccount();
    }
    initializePaymentProcess(){
        this.props.confirmCard();
        if(!this.props.isCardInserted){
            Alert.alert(
                'easyPay',
                'Please Slot in Card',
                [
                  {text: 'Confirm', onPress: () => this.showNextStage()},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }
    }
    goToPayment(){
        this.props.goToPayment();
    }
    showNextStage(){
        this.props.showNextStage();
    }
    proceedToPaymentIfCardPresent(){
        if(this.props.isCardInserted){
            return (
                <FAB onPress={this.goToPayment} style={{backgroundColor:'#22CAFF'}} iconname={'arrow-forward'}/>
            )
        }
        return null
    }
    render() {
        const { containerStyle, cardContainerStyle, iconstyle, lableStyle } = styles
        return (
            <Container>
                <Header style={{backgroundColor: '#ff5722'}}  androidStatusBarColor='#c41c00'>
                    <Left>
                        <Button onPress={this.goToAccounts} transparent>
                            <Icon name='arrow-round-back' style={{fontSize:27, color:'#fff'}} />
                        </Button>
                    </Left>
                    <Body>
                        <View style={{marginLeft: 10 }}>
                            <Title>
                                Transactions
                            </Title>
                        </View>
                    </Body>
                    {/* <Right>
                        { this.proceedToPaymentIfCardPresent()}
                    </Right> */}
                </Header>
                <Content 
                    contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}
                >
                        <View style={cardContainerStyle}>
                            <CardRow>
                            <TouchableOpacity onPress={this.initializePaymentProcess} style={{ height:150, width: '50%', marginRight: 8}}>
                            <Card style={{flex: 1}}>
                                <CardItem cardBody>
                                    <Body 
                                    style={iconstyle}>
                                        <Icon name='ios-card' style={{fontSize: 48, color: '#000'}} />
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    
                                    <Body style={lableStyle}>
                                        <Text>Purchase</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height:150, width: '50%', marginRight:16}}>
                            <Card style={{flex: 1}}>
                                <CardItem cardBody>
                                    <Body
                                        style={iconstyle}
                                    >
                                        <Icon name='ios-cash' style={{fontSize: 48, color: '#000'}} />
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    
                                    <Body style={lableStyle}>
                                        <Text>cashback</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            </TouchableOpacity>
                            </CardRow>
                            <CardRow>
                                <TouchableOpacity style={{flex: 1}}>
                                <Card style={{ height:150, width:'100%'}}>
                                    <CardItem cardBody>
                                        <Body style={iconstyle}>
                                            <Icon 
                                            type='MaterialIcons' name='dashboard' 
                                            style={{fontSize: 48, color: '#000'}} />
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        
                                        <Body style={lableStyle}>
                                            <Text>Admin</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                                </TouchableOpacity>
                            </CardRow>
                        </View>
                        { this.proceedToPaymentIfCardPresent()}
                </Content>
                {/* <AwesomeAlert
                    show={this.props.showCardAlert}
                    showProgress={false}
                    title="easyPay"
                    message="Please Insert Card"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="Cancel"
                    confirmText="Done"
                    confirmButtonColor="#ff8a50"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                /> */}
            </Container>

        );
    }
}

const styles = {
    containerStyle: {
        flex: 1
    },
    cardContainerStyle: {
        flex: 1, 
        flexDirection:'column', 
        marginTop: '5%', 
        marginLeft:8, 
        marginRight:16
    },
    iconstyle: {
        flex: 1, 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:16
    },
    lableStyle: {
        flex: 1, 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center'
    }
}

const mapStateToProps = state => {
    const { showCardAlert, isCardInserted } = state.payment;
    return {
        showCardAlert,
        isCardInserted
    }
}

export default connect(mapStateToProps, actions)(Home);
