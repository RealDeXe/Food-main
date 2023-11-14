import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { menuDetailedData } from '../global/Data'
import MenuCard from '../components/MenuCard'
import { FlatList, TouchableOpacity } from 'react-native'

export function Route1() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <FlatList 
        style={{backgroundColor: 'white'}}
        data = {menuDetailedData}
        keyExtractor = {(item,index)=>index.toString()}
        renderItem  = {({item,index})=>(
            <TouchableOpacity>
                <MenuCard
                productName={item.meal}
                image = {item.image}
                price = {item.price}
                productDetails = {item.details}
                />
            </TouchableOpacity>
        )}

        shownVerticalScrollIndicator = {false}
        />
      </View>
    </View>
  )
}

export const Route2 =()=> (
    <View style={styles.scene}>
        <View style={styles.view2}>
            <Text> Menu Tabs</Text>
        </View>
    </View>
)

export const Route3 =()=> (
    <View style={styles.scene}>
        <View style={styles.view2}>
            <Text> Menu Tabs</Text>
        </View>
    </View>
)

export const Route4 =()=> (
    <View style={{ ...styles.scene, backgroundColor: "green" }}>
        <View style={styles.view2}>
            <Text> Menu Tabs</Text>
        </View>
    </View>
)

export const Route5 =()=> (
    <View style={styles.scene}>
        <View style={styles.view2}>
            <Text> Menu Tabs</Text>
        </View>
    </View>
)

export const Route6 =()=> (
    <View style={styles.scene}>
        <View style={styles.view2}>
            <Text> Menu Tabs</Text>
        </View>
    </View>
)

export const Route7 =()=> (
    <View style={styles.scene}>
        <View style={styles.view2}>
            <Text> Menu Tabs</Text>
        </View>
    </View>
)

export const Route8 =()=> (
    <View style={styles.scene}>
        <View style={styles.view2}>
            <Text> Menu Tabs</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    scene:{
        flex: 1,
        backgroundColor: "#673ab7"
    },
    view2:{
        marginTop: 5,
        paddingBottom: 20
    },
    scene2:{
        backgroundColor: "#673ab7"
    }
})