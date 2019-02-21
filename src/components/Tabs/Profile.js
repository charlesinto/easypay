import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
    Text, Container, Header, Content, Card, CardItem, Left,
    Thumbnail, Body, Right
} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { UserInfo } from '../common';

class Profile extends Component {
    render(){
        return (
            <Container>
                <Content>
                <Card>
                    <CardItem>
                    <Left>
                        <Thumbnail 
                        source={{uri: 'https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png'}} 
                        style={{height: 36, width: 36}}
                        />
                        <Body>
                        <Text>Charles Onuorah</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image 
                        source={{uri: 'https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png'}}
                        style={{flex:1, width: undefined, height: 300 }}
                        resizeMode="contain" 
                        />
                    </CardItem>
                    <CardItem style={{height: 120 }}>
                        <Left>
                            <UserInfo />
                        </Left>

                    </CardItem>
                </Card>
                </Content>
      </Container>
        );
    }
}

export default connect(null, actions)(Profile);
