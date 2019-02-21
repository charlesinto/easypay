import React, { Component} from 'react';
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Profile from './Profile';
import Notifications from './Notifications';
import Attendance from './Attendance';
import Logout from '../LogginForm'; 

 export default createMaterialTopTabNavigator(
    {
      Home: { 
        screen: Profile,
        navigationOptions: {
          tabBarIcon: color => {
            const { tintColor } = color;
            return (
              <Icon name='ios-home' style={{ color: tintColor }} />
            )
          }
        }
       },
      Activity: {
        screen: Notifications,
        navigationOptions: {
          tabBarIcon: color => {
            const { tintColor } = color;
            return (
              <Icon name='ios-chatbubbles' style={{ color: tintColor }} />
            );
          }
        }
      },
      Attendance: {
        screen: Attendance,
        navigationOptions: {
          tabBarIcon: color => {
            const { tintColor } = color;
            return (
              <Icon name='ios-checkmark' style={{ color: tintColor }} />
            );
          }
        }
       }
    }, {
      initialRouteName: 'Home',
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      tabBarOptions: {
        labelStyle: {
          margin: 0
        },
        activeTintColor: '#fff',
        inactiveTintCoor: '#191919',
        shifting: true,
        style: {
          backgroundColor: '#0073e5',
          borderTopWidth: 0.5,
        },
        showIcon: true,
        indicatorStyle: {
          height: 0
        }
      }
      
    }
  );
  