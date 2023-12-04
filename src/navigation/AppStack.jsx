import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/auth/OnBoarding';
import SNSU from '../screens/auth/SNSU';
import SplashScreen from '../screens/auth/SplashScreen';
import BottomTabs from './BottomTabs';
import PickInterests from '../screens/home/PickInterests';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen
        name="SNSU"
        component={SNSU}
        options={{presentation: 'transparentModal'}}
      />
       <Stack.Screen name="BottomTabs" component={BottomTabs} />
     <Stack.Screen name="PickInterests" component={PickInterests} />
    </Stack.Navigator>
  );
};

export default AppStack;
