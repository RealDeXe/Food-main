import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {Avatar, Icon} from 'react-native-elements';
import {COLORS} from '../global/styles';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{
            backgroundColor: COLORS.buttons,
        }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={require('../assets/user.jpg')}
            />

            <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold',color: COLORS.CardBackground,fontSize: 18,}}>
                John Mark
              </Text>
              <Text style={{color: COLORS.CardBackground,fontSize: 14,}}>
                john@gmail.com
              </Text>
            </View>

          </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 5}}>
                <View style={{flexDirection: 'row', marginTop: 0}}>
                <View style={{marginLeft: 10,alignItems: 'center',justifyContent: 'center',}}>
                    <Text style={{fontWeight: 'bold',color: COLORS.CardBackground,fontSize: 18,}}>
                        1
                    </Text>
                    <Text style={{color: COLORS.CardBackground,fontSize: 14,}}>
                        My Favorites
                    </Text>
                </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 0}}>
                <View style={{marginLeft: 10,alignItems: 'center',justifyContent: 'center',}}>
                    <Text style={{fontWeight: 'bold',color: COLORS.CardBackground,fontSize: 18}}>
                        0
                    </Text>
                    <Text style={{color: COLORS.CardBackground,fontSize: 14}}>
                        My Cart
                    </Text>
                </View>
                </View>
            </View>

        </View>

        <DrawerItemList {...props} />
        
        <DrawerItem 
        label= "Payment"
        icon={({ color, size })=>(
            <Icon 
            type='material-community'
            name='credit-card-outline'
            color={color}
            size={size}
            />
        )}
        />
        <DrawerItem 
        label= "Promotions"
        icon={({ color, size })=>(
            <Icon 
            type='material-community'
            name='tag-heart'
            color={color}
            size={size}
            />
        )}
        />
        <DrawerItem 
        label= "Settings"
        icon={({ color, size })=>(
            <Icon 
            type='material-community'
            name='cog-outline'
            color={color}
            size={size}
            />
        )}
        />
        <DrawerItem 
        label= "Help"
        icon={({ color, size })=>(
            <Icon 
            type='material-community'
            name='lifebuoy'
            color={color}
            size={size}
            />
        )}
        />

        <View style={{borderTopWidth: 1, borderTopColor: COLORS.grey5}}>
            <Text style={styles.preferences}>Preferences</Text>
            <View style={styles.switchText}>
                <Text style={styles.darkModeText}>Dark Mode</Text>
                <View style={{paddingRight: 10}}>
                    <Switch 
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor="#f4f3f4"
                    />
                </View>
            </View>
        </View>

      </DrawerContentScrollView>

      <DrawerItem 
        label= "Sign Out"
        icon={({ color, size })=>(
            <Icon 
            type='material-community'
            name='logout-variant'
            color={color}
            size={size}
            />
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: COLORS.pageBackground,
  },
  preferences:{
    fontSize: 16,
    color: COLORS.gery2,
    paddingTop: 10,
    paddingLeft: 20
  },
  switchText:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10
  },
  darkModeText:{
    fontSize: 16,
    color: COLORS.gery2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold'
  }
});
