import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, parameters} from '../../global/styles';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';

export default function Welcome({navigation}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: COLORS.buttons,
            fontWeight: 'bold',
          }}>
          DISCOVER STORE
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: COLORS.buttons,
            fontWeight: 'bold',
          }}>
          IN YOUR AREA
        </Text>
      </View>

      <View
        style={{
          flex: 4,
          justifyContent: 'center',
        }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothing-store-banner-design-template-e7332aaf6402c88cb4623bf8eb6f97e2_screen.jpg?ts=1620867237',
              }}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg',
              }}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg',
              }}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/65/85/47/360_F_365854716_ZHB0YN3i3s0H7NjI9hiezH53D5nvoF0E.jpg',
              }}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </Swiper>
      </View>

      <View
        style={{
          flex: 4,
          justifyContent: 'flex-end',
          marginBottom: 20,
        }}>
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 20,
          }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress = {()=>{
              navigation.navigate('SignInScreen')
            }}
          />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 30
          }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton:{
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: COLORS.buttons
  },
  createButtonTitle:{
    color: COLORS.gery1,
    // color: "#ffe706",
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3
  }
});
