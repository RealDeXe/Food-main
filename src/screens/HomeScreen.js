import {FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../global/styles';
import {Icon} from 'react-native-elements';
import { filterData, restauratsData } from '../global/Data';
import { Dimensions } from 'react-native';
import FoodCard from '../components/FoodCard';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0")
  return (
    <View style={styles.container}>
      {/* <StatusBar 
        translucent
        barStyle="light-content"
        backgroundColor="rgba(255, 140, 82,1)"
      /> */}
      <HomeHeader navigation={navigation} />

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={{backgroundColor: COLORS.CardBackground, paddingBottom: 6}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? COLORS.buttons : null,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantsMapScreen')
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? null : COLORS.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={COLORS.gery1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>22 salé hay salam</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={COLORS.gery1}
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={COLORS.gery1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Categories</Text>
        </View>

        <View>
            <FlatList 
            horizontal ={true}
            showsHorizontalScrollIndicator ={false}
            data={filterData}
            keyExtractor = {(item)=>item.id}
            extraData = {indexCheck}
            renderItem = {({item, index})=>(
                <Pressable
                onPress={()=>{
                    setIndexCheck(item.id)
                }}
                >
                    <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                        <Image 
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 30
                        }} 
                        source = {item.image}
                        />
                        <View>
                            <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
                        </View>
                    </View>
                </Pressable>
            )}
            />
        </View>

        <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Free Delivery now</Text>
        </View>

        <View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{
              marginLeft: 15,
              fontSize: 16,
              marginTop: 10,
              marginRight: 5,
              color: '#404040'
            }}>Options changing in</Text>
            <CountDown 
            until={3600}
            size = {14}
            digitStyle = {{ backgroundColor: COLORS.lightgreen }}
            digitTxtStyle = {{ color: COLORS.CardBackground }}
            timeToShow = {['M','S']}
            timeLabels = {{ m: 'Min', s: 'Sec' }}
            />
          </View>

          <FlatList 
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal = {true}
            data = {restauratsData}
            keyExtractor = {(item, index)=>index.toString()}
            showsHorizontalScrollIndicator = {false}
            renderItem = {({item})=>(
              <View style={{marginRight: 5}}>
                <FoodCard 
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images = {item.images}
                  restaurantName = {item.restaurantName}
                  farAway = {item.farAway}
                  businessAddress = {item.businessAddress}
                  averageReview = {item.averageReview}
                  numberOfReview = {item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Promotions availabe</Text>
        </View>

        <View>
          <FlatList 
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal = {true}
            data = {restauratsData}
            keyExtractor = {(item, index)=>index.toString()}
            showsHorizontalScrollIndicator = {false}
            renderItem = {({item})=>(
              <View style={{marginRight: 5}}>
                <FoodCard 
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images = {item.images}
                  restaurantName = {item.restaurantName}
                  farAway = {item.farAway}
                  businessAddress = {item.businessAddress}
                  averageReview = {item.averageReview}
                  numberOfReview = {item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Restaurants in your area</Text>
        </View>

        <View style = {{width: SCREEN_WIDTH, paddingTop: 10}}>
          {
            restauratsData.map(item =>(
              <View key={item.id} style = {{ paddingBottom: 20 }}>
                <FoodCard 
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images = {item.images}
                  restaurantName = {item.restaurantName}
                  farAway = {item.farAway}
                  businessAddress = {item.businessAddress}
                  averageReview = {item.averageReview}
                  numberOfReview = {item.numberOfReview}
                />
              </View>
            ))
          }
        </View>

      </ScrollView>
      {delivery &&
        <View style={styles.floatButton}>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('RestaurantsMapScreen')
          }}
        >
          <Icon 
          name='place'
          type='material'
          size={32}
          color = {COLORS.buttons}
          />
          <Text style={{ color: COLORS.gery2 }}>Map</Text>
        </TouchableOpacity>
      </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.CardBackground,
    // paddingTop: 20
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
//   deliveryButton2: {
//     paddingHorizontal: 20,
//     borderRadius: 15,
//     paddingVertical: 5,
//   },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: COLORS.CardBackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: COLORS.grey5,
    borderRadius: 20,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  headerText:{
    color: COLORS.gery1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  headerTextView:{
    backgroundColor: COLORS.grey5,
    paddingVertical: 3
  },
  smallCard:{
    borderRadius: 40,
    // backgroundColor: COLORS.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding : 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardSelected:{
    borderRadius: 30,
    backgroundColor: COLORS.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding : 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardTextSelected:{
    fontWeight: 'bold',
    color: COLORS.CardBackground
  },
  smallCardText:{
    fontWeight: 'bold',
    color: COLORS.gery2
  },
  floatButton:{
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center'
  }
});
