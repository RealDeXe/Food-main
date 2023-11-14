import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import {COLORS} from '../global/styles';
import {Icon} from 'react-native-elements';
import ClientStack from './ClientStack';

export default function RootClientTabs() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
    screenOptions={{
      headerShown: false,
    }}
      tabBarOptions={{
        activeTintColor: COLORS.buttons,
      }}>
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
