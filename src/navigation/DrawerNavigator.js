import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { COLORS } from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    drawerContent={props =><DrawerContent {...props} />}
    screenOptions={{ 
        headerShown: false,
     }}>
        <Drawer.Screen 
        name="RootClientTabs" 
        component={RootClientTabs}
        options = {{ 
            title: 'Client',
            drawerIcon: ({focussed, size}) => (
                <Icon 
                name='home'
                type='material-community'
                color={focussed ? '#7cc' : COLORS.gery2}
                size={size}
                />
            )
        }}
        />
        <Drawer.Screen 
        name="BusinessConsoleScreen" 
        component={BusinessConsoleScreen}
        options = {{ 
            title: 'Business console',
            drawerIcon: ({focussed, size}) => (
                <Icon 
                name='business'
                type='material'
                color={focussed ? '#7cc' : COLORS.gery2}
                size={size}
                />
            )
        }}
        />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})