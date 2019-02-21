import React, { Component } from 'react';
import { 
    Container, Content, Card, Button, CardItem, Body, Right, Icon,Text
} from 'native-base';
import { View } from 'react-native';

import CardRow from './CardRow';

class Menu extends Component {
    render(){
        const { containerStyle } = styles;
        return (
            <View style={[containerStyle, this.props.style]}>
                    <CardRow style={{flex: 1}}>
                    <Button transparent sytle={{flex: 1}}>
                            <Card style={{ height:150, width: '50%'}}>
                                <CardItem cardBody>
                                    <Body>
                                        <Icon name='ios-card' style={{width: 48, height: 48, color: '#000'}} />
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    
                                    <Body>
                                        <Text>Purchase</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Button>
                        <Button transparent style={{flex: 1}}>
                            <Card style={{ height:150}}>
                                <CardItem cardBody>
                                    <Body>
                                        <Icon name='ios-card' style={{width: 48, height: 48, color: '#000'}} />
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    
                                    <Body>
                                        <Text>Purchase</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Button>
                    </CardRow>
                    <CardRow>
                        <Button transparent>
                            <Card style={{ height:150}}>
                                <CardItem cardBody>
                                    <Body>
                                        <Icon type='MaterialIcons' name='dashboard' style={{width: 48, height: 48, color: '#000'}} />
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    
                                    <Body>
                                        <Text>Admin</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Button>
                    </CardRow>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1
    }
}

export default Menu;

