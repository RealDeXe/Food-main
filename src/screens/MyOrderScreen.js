import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyOrderScreen() {
  return (
    <View style={styles.container}>
      <Text>MyOrderScreen</Text>
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