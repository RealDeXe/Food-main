import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchResultCard from '../components/SearchResultCard';
import {restauratsData} from '../global/Data';
import {COLORS} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchResultScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{backgroundColor: COLORS.CardBackground}}
          data={restauratsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
              onPressRestaurantCard = {()=>{navigation.navigate("ReastaurantHomeScreen",{id: index,restaurant:item.restaurantName})}}
            />
          )}
          ListHeaderComponent={
            <View>
              <Text style={styles.listHeader}>
                {restauratsData.length} Result for {route.params.item}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator = {false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20
  },
  listHeader: {
    color: COLORS.gery1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});
