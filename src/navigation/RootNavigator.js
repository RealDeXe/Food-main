import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './authNavigators'

export default function RootNavigator() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})