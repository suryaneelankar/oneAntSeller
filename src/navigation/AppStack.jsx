import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/auth/OnBoarding';
import SNSU from '../screens/auth/SNSU';
import SplashScreen from '../screens/auth/SplashScreen';
// import BottomTabs from './BottomTabs';
import PickInterests from '../screens/home/PickInterests';
// import FilterModalScreen from '../screens/home/FilterModalScreen';
// import SearchScreen from '../screens/home/SearchScreen';
// import ProductDetailScreen from '../screens/ProductDetailScreen';
// import DealsforYou from '../screens/DealsforYou';
// import ShareModalScreen from '../screens/ShareModalScreen';
// import ProceedToBuy from '../screens/buy/ProceedToBuy';
// import BuyWithAGroup from '../screens/buy/BuyWithAGroup';
// import CreateAGroup from '../screens/CreateAGroup';
// import AddMembers from '../screens/AddMembers';
// import CheckOut from '../screens/buy/CheckOut';
// import Groups from '../screens/Groups';
// import GroupSelected from '../screens/buy/GroupSelected';
// import ShipmentAndAddress from '../screens/buy/ShipmentAndAddress';
// import Payment from '../screens/buy/Payment';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen
        name="SNSU"
        component={SNSU}
        options={{presentation: 'transparentModal'}}
      />
     <Stack.Screen name="PickInterests" component={PickInterests} />

      {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
      {/* <Stack.Screen name="PickInterests" component={PickInterests} />
      <Stack.Screen
        name="FilterModalScreen"
        component={FilterModalScreen}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="DealsforYou" component={DealsforYou} />
      <Stack.Screen
        name="ShareModalScreen"
        component={ShareModalScreen}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen
        name="BuyWithAGroup"
        component={BuyWithAGroup}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen
        name="AddMembers"
        component={AddMembers}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen name="ProceedToBuy" component={ProceedToBuy} />
      <Stack.Screen name="CreateAGroup" component={CreateAGroup} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="GroupSelected" component={GroupSelected} />
      <Stack.Screen name="ShipmentAndAddress" component={ShipmentAndAddress} />
      <Stack.Screen name="Payment" component={Payment} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
