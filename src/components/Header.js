import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
      <View style={{
        marginLeft: 20
      }}>
        <Icon
          type="material-community"
          name={type}
          color={COLORS.heacherText}
          size={28}
          onPress={() => {navigation.goBack()}}
        />
      </View>
      <View>
        <Text style={styles.heacherText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.buttons,
    height: parameters.headerHeight,
  },
  heacherText: {
    color: COLORS.heacherText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30
  },
});
