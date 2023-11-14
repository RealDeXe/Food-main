import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function FoodCard({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={{uri: images}}
        />

        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={COLORS.gery2}
                size={18}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={styles.Min}>{farAway} Min</Text>
            </View>

            <View style={{flexDirection: 'row', flex: 9}}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.gery1,
    marginTop: 5,
    marginLeft: 5,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: COLORS.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: COLORS.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: COLORS.gery2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview: {
    color: 'white',
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
});
