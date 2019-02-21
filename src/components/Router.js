import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import LogginForm from './LogginForm';
import Home from './Home';
import SelectAccount from './SelectAccount';
import Payment from './Payment';
import PaymentSuccesful from './PaymentSuccesful'

const ReactComponent = () => {
    return (
        <Router navigationBarStyle={styles.navBar} headerTitleStyle={styles.headerTitleStyle} titleStyle={styles.navTitle} >
            <Scene key="root" hideNavBar>
                <Scene key = "auth"  >
                    <Scene key="login" component={LogginForm} title="timeTicker" hideNavBar />
                </Scene>
                <Scene key="main">
                    <Scene key="selectAccount" component={SelectAccount} title='timeTicker' hideNavBar />
                    <Scene key="home" component={Home} title='timeTicker' hideNavBar />
                    <Scene key="paymentScreen" component={Payment} title='timeTicker' hideNavBar />
                    <Scene key="paymentSuccessful" component={PaymentSuccesful} title='timeTicker' hideNavBar />
                </Scene>
                
            </Scene>
        </Router>
    )
}

const styles = StyleSheet.create({
    navBar: {
      backgroundColor: '#1976d2', // changing navbar color
    },
    navTitle: {
      color: '#fff', // changing navbar title color
    },
    headerTitleStyle: {
        textAlign: "center", 
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: '600' 
    }
  })

export default ReactComponent;
