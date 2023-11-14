import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, parameters} from '../global/styles';
import {Icon, withBadge} from 'react-native-elements';

export default function HomeHeader({navigation}) {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={COLORS.CardBackground}
          size={32}
          onPress = {()=>{
            navigation.toggleDrawer()
          }}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.CardBackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          MyFood
        </Text>
      </View>

      <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={COLORS.CardBackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between'
  },
});
