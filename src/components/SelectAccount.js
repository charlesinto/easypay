import React, { PureComponent } from 'react';
import { View, ScrollView, FlatList, TextInput, TouchableOpacity  } from 'react-native';
import { 
    Container, Header, Icon, Text, Button, Title, Body, Content,
     Card, CardItem, Form, Picker, Input, Item, Label, Left, ListItem, Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Modal  from 'react-native-modal'
import { ConfirmDialog } from 'react-native-simple-dialogs'
import { InputTag } from './common';
import * as action from '../actions';
import { LoadingSpinner } from './common'

class SelectAccount extends PureComponent{
    constructor(){
        super();
        this.goToHome = this.goToHome.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
        this.fetchAccounts = this.fetchAccounts.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.isItemSelected = this.isItemSelected.bind(this);
        this.acountSelected = this.acountSelected.bind(this);
        this.onCodeChange = this.onCodeChange.bind(this);
        this.validateAccount = this.validateAccount.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderError = this.renderError.bind(this);
        this.renderSpinner = this.renderSpinner.bind(this);
    }
    componentWillMount(){
        this.fetchAccounts();
    }
    componentDidUpdate(prevProps){
        if((prevProps.isModalVisible === true && this.props.isModalVisible === false) && this.props.loggingSuccess){
            setTimeout(()=> {Actions.home();}, 200);
        }
    }
    fetchAccounts(){
       this.props.getBranches();
    }
    onCodeChange(code){
        this.props.onCodeChange(code);
    }
    acountSelected(account){
        this.props.selectedAccount(account)
    }
    validateAccount(){
        const { branchid, branchcode, branchname,code } = this.props;
        const account = {
            branchid,
            branchcode,
            branchname
        }
        this.props.validateAccount({account, code});
    }
    renderSpinner(){
        if(this.props.branches.length > 0){
            return null
        }else{
            return (
                <LoadingSpinner />
            )
        }

    }
    renderError(){
        const { errorView, errorText } = styles;
        if(this.props.error){
            return (
                <View style={errorView}>
                    <Text style={errorText}>
                        Invalid code
                    </Text>
                </View>
            )
        }
        return null
    }
    closeModal(){
        this.props.dismissModal();
    }
    goToHome(){
        const {accountType, pin} = this.props;
        this.props.goToHome({ accountType, pin});
    }
    goToLogin(){
        this.props.goToLogin();
    }
    renderItem(account){
        console.log('accout', account);
        const { item } = account;
        const { branchname, branchcode, branchid } = item;
        return (
            <ListItem selected={() => this.isItemSelected(branchid)} onPress={() => this.acountSelected(item)}>
                <Left>
                    <Text style={this.isItemSelected(branchid, 'TEXT')}>
                        {branchname}
                    </Text>
                </Left>
                <Right>
                    <Icon name='arrow-forward' style={this.isItemSelected(branchid, 'ICON')} />
                </Right>
            </ListItem>
        )
    }
    isItemSelected(id, targetElement){
        if(this.props.branchid && (this.props.branchid === id)){
            switch(targetElement){
                case 'TEXT':
                    return {
                        color:'#22CAFF'
                    }
                case 'ICON':
                    return {
                        color:'#22CAFF'
                    }
                default: 
                    return {}
            }
            
        }
        return null;
    }
    
    render(){
        const { containerStyle, pickerStyle, buttonStyle } = styles;
        return (
            
                <Container style={{flex: 1}}>
                    <Header style={{backgroundColor: '#ff5722'}}  androidStatusBarColor='#c41c00'>
                        <Left>
                            <Button onPress={this.goToLogin} transparent>
                                <Icon name='arrow-round-back' style={{fontSize:27, color:'#fff'}} />
                            </Button>
                        </Left>
                        <Body>
                            <View style={{marginLeft: 10 }}>
                                <Title>
                                    Select Branch
                                </Title>
                            </View>
                        </Body>
                    </Header>
                    <Content style={{flex: 1}} contentContainerStyle={{flex:1}}>
                            <ScrollView style={{flex: 1}} contentContainerStyle={{flex:1}}>
                            <FlatList 
                                data={this.props.branches}
                                renderItem={this.renderItem}
                                keyExtractor={account => `${account.branchid}`}
                                extraData={this.props.branchid}
                            />
                            <Modal 
                                isVisible={this.props.isModalVisible}
                                hideModalContentWhileAnimating 
                                animationType ="slide"
                            >
                                <View 
                                    style={{height:370, flexDirection:'column',backgroundColor: '#fff', }}
                                >
                                    <View style={{flex: 1, marginBottom: 20}}>
                                        <Text 
                                            style={{flex: 1, alignSelf: 'center', fontSize: 18, fontWeight: '600', marginTop:10}}
                                        >
                                            Login To  Branch Account
                                        </Text>
                            
                                        <View 
                                            style={{flex: 4}}
                                        >
                                            <View>
                                                
                                                <Form>
                                                    <Text style={{marginLeft: 10,fontWeight: '600'}}>Account Name</Text>
                                                    <Item>
                                                        <Input value={this.props.branchname} disabled/>
                                                    </Item>
                                                    <Text style={{marginLeft: 10,marginTop: 10,fontWeight: '600'}}>Account Code</Text>
                                                    <Item last>
                                                        <Input 
                                                            placeholder="Enter pin" value={this.props.code}
                                                            onChangeText={this.onCodeChange}
                                                            secureTextEntry
                                                        />
                                                    </Item>
                                                </Form>
                                            
                                            </View>
                                            {this.renderError()}
                                            <View style={{marginTop: 20,flex: 1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                                                <Button style={{marginRight: 10}} bordered primary onPress={this.validateAccount}>
                                                    <Text>Ok</Text>
                                                </Button>
                                                <Button style={{marginRight: 10}} bordered info onPress={this.closeModal}>
                                                    <Text>Cancel</Text>
                                                </Button>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            {this.renderSpinner()}
                        </ScrollView>
                        
                    </Content>
                    
                </Container>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16
    },
    pickerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonStyle: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 10
    },
    errorView:{
        marginTop:10,
        flex: 1,
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText:{
        fontSize:12,
        color: 'red'
    }

}

const mapStateToProps = state => {
    const { accountDetail, isModalVisible, code, branches, error, loggingSuccess } = state.accountEntry
    const { branchid, branchname, branchcode } = accountDetail;
    return {
        branchid,
        branchcode,
        branchname,
        isModalVisible,
        code,
        branches,
        error,
        loggingSuccess
    }
}

export default connect(mapStateToProps, action)(SelectAccount);