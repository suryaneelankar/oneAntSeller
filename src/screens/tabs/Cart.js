import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList,Linking } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
import { IMAGES } from '../../assets/images';


const Cart = () => {

  const data1 = [
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' }
  ]
  // { name: 'Address', value: '10068-1N' },
  // { name: 'Status', value: 'Pending' }];

  const renderItem = ({ item }) => {

    return (
      <View style={styles.mainView}>

        <View style={styles.OrdersProfileView}>
          <Image
            source={IMAGES.ProfilePicPicker}
            style={styles.OrdersImage}
            resizeMode='cover'
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', color: 'black' }}>Y-Pack Unisex Bag</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>#123456789</Text>
          </View>
          <Image
            source={IMAGES.ProfilePicPicker}
            style={{ width: 60, height: 60 }}
            resizeMode='cover'
          />
        </View>

        <View style={styles.BuyersView}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Buyers</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>Amit + 3 Others</Text>
          </View>
          <Image
            source={IMAGES.ProfilePicPicker}
            style={{ width: 50, height: 50, marginRight: 10 }}
            resizeMode='cover'
          />
        </View>

        <View style={styles.TotalPriceView}>
          <Text style={styles.TotalPriceText}>{item.name}</Text>
          <Text style={styles.TotalPrice}>{item.value}</Text>
        </View>

        <View style={styles.AddressView}>
          <Text style={styles.TotalPriceText}>Address</Text>
          <Text style={styles.TotalPrice}>10068-IN</Text>
        </View>

        <View style={styles.StatusView}>
          <Text style={styles.TotalPriceText}>Status</Text>
          <Text style={styles.StatusPendingText}>PENDING</Text>
        </View>

      </View>

    );
  }

  return (
    <View>

      {/* <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: 10,
        }}>
        <PrimaryButton label={'Cart Screen'} />
        </View> */}

      <View style={styles.OrdersView}>
        <Text style={styles.OrdersText}>Orders</Text>
        <TouchableOpacity style={styles.OrdersBtn}
        onPress={() => {Linking.openURL('https://www.npmjs.com/package/@react-native-community/cli-doctor')}}
        >
          <Text style={styles.OrdersBtnText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList style={styles.FlatListStyle}
        data={data1}
        renderItem={renderItem}
        keyExtractor={(item) => item.value}
      />

    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  OrdersView: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  OrdersText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black'
  },
  OrdersBtn: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginRight: 20
  },
  OrdersBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  mainView: {
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom:10
  },
  FlatListStyle: {
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1,
    paddingBottom: 5
  },
  OrdersProfileView: {
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  OrdersImage: {
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginLeft: 5,
  },
  BuyersView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 25
  },
  TotalPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 25
  },
  TotalPriceText: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 5,
    color: 'black'
  },
  TotalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'black'
  },
  AddressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 25
  },
  StatusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  StatusPendingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'red',
    backgroundColor: 'orange',
    padding: 7,
    borderRadius: 5
  }

});
