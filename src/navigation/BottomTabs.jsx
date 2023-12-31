import {Text, StyleSheet, Platform} from 'react-native';
import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/tabs/Home';
import Saved from '../screens/tabs/Saved';
import Cart from '../screens/tabs/Cart';
import More from '../screens/tabs/More';
import SVGIcon from '../components/common/SvgIcon';
import {COLORS} from '../constants/Colors';

const BottomTab = createBottomTabNavigator();

const ActiveIcon = ({iconName, size = '24', text}) => (
  <>
    <SVGIcon
      width={size}
      height={size}
      name={iconName}
      fill="transparent"
      strokeWidth={2}
    />
    <Text style={styles.text}>{text}</Text>
  </>
);

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: Platform.OS == 'ios' ? 80 : 56,
          backgroundColor: '#fff',
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: useCallback(({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <ActiveIcon iconName={'active_home'} text="Shop" size="24" />
            ) : (
              <>
                <SVGIcon
                  width={24}
                  height={24}
                  name="home"
                  fill="transparent"
                  strokeWidth={2}
                />
                <Text style={[styles.text, styles.colorGray]}>Shop</Text>
              </>
            );
          } else if (route.name === 'Saved') {
            return focused ? (
              <ActiveIcon iconName={'active_saved'} text="Saved" size="24" />
            ) : (
              <>
                <SVGIcon
                  width={24}
                  height={24}
                  name="saved"
                  fill="transparent"
                  strokeWidth={2}
                />
                <Text style={[styles.text, styles.colorGray]}>Saved</Text>
              </>
            );
          } else if (route.name == 'Cart') {
            return focused ? (
              <ActiveIcon iconName={'active_cart'} text="Cart" size="24" />
            ) : (
              <>
                <SVGIcon
                  width={24}
                  height={24}
                  name="cart"
                  fill="transparent"
                  strokeWidth={2}
                />
                <Text style={[styles.text, styles.colorGray]}>Cart</Text>
              </>
            );
          } else if (route.name === 'More') {
            return focused ? (
              <ActiveIcon iconName={'active_more'} text="More" size="24" />
            ) : (
              <>
                <SVGIcon
                  width={24}
                  height={24}
                  name="more"
                  fill="transparent"
                  strokeWidth={2}
                />
                <Text style={[styles.text, styles.colorGray]}>More</Text>
              </>
            );
          }
        }, []),
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Saved" component={Saved} />
      <BottomTab.Screen name="Cart" component={Cart} />
      <BottomTab.Screen name="More" component={More} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  centerMenuImg: {width: 86, height: 86},
  text: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
  colorGray: {
    color: '#aaa',
  },
});

export default BottomTabs;
