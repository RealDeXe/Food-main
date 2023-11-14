import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from './src/global/styles'
import SignInScreen from './src/screens/authScreens/SignInScreen'
import Welcome from './src/screens/authScreens/Welcome'
import RootNavigator from './src/navigation/RootNavigator'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor={COLORS.statusbar}
      />
      <RootNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})