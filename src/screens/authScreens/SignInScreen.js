import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../components/Header';
import {COLORS, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Button, Icon, SocialIcon} from 'react-native-elements';

export default function SignInScreen({navigation}) {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
        }}>
        <Text style={title}>Sign In</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={styles.text1}>Please enter your email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Enter your email"
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: COLORS.grey3}}
              type="material"
            />
          </Animatable.View>

          <TextInput
            style={{width: '80%'}}
            placeholder="Enter your password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />

          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: COLORS.grey3}}
              type="material"
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{
        marginTop: 30,
        marginHorizontal: 20
      }}>
        <Button 
        title="SIGN IN" 
        buttonStyle = {parameters.styledButton} 
        titleStyle = {parameters.buttonTitle}
        onPress = {()=>{
          navigation.navigate('DrawerNavigator')
        }}
        />
      </View>

      <View style={{
        marginTop: 15,
        alignItems: 'center'
      }}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>Forgot Password ?</Text>
      </View>

      <View style={{
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
      }}>
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            color: '#333'
        }}>OR</Text>
      </View>

      <View style={{
        marginHorizontal: 10,
        marginTop: 10
      }}>
        <SocialIcon 
        title='Sign In With Facebook'
        button
        type='facebook'
        style = {styles.socialIcon}
        onPress = {()=>{}}
        />
      </View>

      <View style={{
        marginHorizontal: 10,
        marginTop: 10
      }}>
        <SocialIcon 
        title='Sign In With Google'
        button
        type='google'
        style = {styles.socialIcon}
        onPress = {()=>{}}
        />
      </View>

      <View style={{
        marginTop: 25,
        marginLeft: 20
      }}>
        <Text style={{...styles.text1}}>New on MyFood ?</Text>
      </View>

      <View style={{
        alignItems: 'flex-end',
        marginHorizontal: 20
      }}>
        <Button 
        title= 'Create an account'
        buttonStyle = {styles.createButton}
        titleStyle = {styles.createButtonTitle}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: COLORS.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  socialIcon:{
    borderRadius : 12,
    height: 50
  },
  createButton:{
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20
  },
  createButtonTitle:{
    color: "#ff8c52",
    // color: "#ffe706",
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3
  }
});
