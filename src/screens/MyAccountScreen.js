import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyAccountScreen() {
  return (
    <View style = {styles.container}>
      <Text>MyAccountScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})