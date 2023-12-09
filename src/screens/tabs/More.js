import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from '../../constants/Colors';
import { IMAGES } from '../../assets/images';






const Data = [
  {
    name: 'Ramesh Agarwal',
    messege: 'Hey there',
    value: '1',
    Time: '06:35 PM',
    Image: IMAGES.ProfilePicPicker
  },
  {
    name: 'Niharika Jain',
    messege: 'Hey there',
    value: '1',
    Time: '06:35 PM',
    Image: IMAGES.ProfilePicPicker
  },
  {
    name: 'Srinja k',
    messege: 'Hey there',
    value: '1',
    Time: '06:35 PM',
    Image: IMAGES.ProfilePicPicker
  },
]

const renderItem = ({ item }) => (
  <View style={{ padding: 1}}>

    <TouchableOpacity style={{ }} >
      <View style={{ flexDirection: 'row',  justifyContent: 'space-between',alignItems:'center' }}>
        <View style={{padding:10}}>
          <Image style={{ height: 60, width: 60, }}
            source={item.Image}></Image>
        </View>

        <View style={{padding:10,marginRight:10,marginRight:0}} >
          <Text style={{ color: '#2A2A2A', fontWeight: 'bold', }} >{item.name}</Text>
          <Text style={{ fontWeight: 'bold',textAlign:'left' }}>{item.messege}</Text>
        </View>


        <View style={{alignItems:'center',marginRight:20}}>
          <Text style={{justifyContent: 'flex-end', color: '#2A2A2A',}}>{item.Time}</Text>

          <Text style={{
            backgroundColor: 'red', justifyContent: 'flex-end',
            color: 'white',
            height: 20, width: 20,
            borderRadius: 90,
           
            padding: 5

          }}>{item.value}</Text>
        </View>

      </View>
    </TouchableOpacity>


  </View>
)



const Tab = createMaterialTopTabNavigator();


const More = () => {

  function serviceRequestscreen() {
    return (


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.black }}>serviceRequest!</Text>
      </View>
    );
  }

  const ItemSeparator = () => (
    <View
      style={{
        height: 1,
        width: 365,
        backgroundColor: 'grey',
      }}
    />
  );


  function chatScreen({ route }) {
    return (
      <View style={{flex:1}}>
        <FlatList 
        style={{}}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    );
  }
  return (
    <>
      <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Support</Text>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
        }}

      >
        <Tab.Screen name="serviceRequest" component={serviceRequestscreen}
          options={{
            tabBarLabel: 'service Request'
          }} />

        <Tab.Screen
          name="Chat"
          component={chatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarBadge: () => (
              <View style={{ backgroundColor: '#F34141', paddingHorizontal: 9, borderRadius: 9, marginRight: 45, marginTop: 15, height: 20, width: 34, alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>{Data.length > 0 ? Data.length : ''}</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default More;

const styles = StyleSheet.create({
  h1: {
    color: COLORS.primary,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 20,
  },
  desc: {
    color: COLORS.gray800,
    fontSize: 12,
    textAlign: 'center',
  },
  label: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 10,
  },
});
