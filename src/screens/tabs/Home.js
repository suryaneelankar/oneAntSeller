import { StyleSheet, Text, View, FlatList, Image,ScrollView } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants/Colors';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import { IMAGES } from '../../assets/images';

const Home = () => {
  const data1 = [
    { name: 'Total Price', value: '$90' },
  ]
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  const countriesData = countries.map(country => ({ label: country, value: country }));
  const [selectedCountry, setSelectedCountry] = useState('Select a country')
  const [currentPosition, setCurrentPosition] = useState(1)
  const data = [{
    labels: "Acceptance",
    date: "sep30",
  },
  {

    labels: "Shipped",
    date: "sep31",

  },
  {
    labels: "Delivered",
    date: "oct1",
  }
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={{marginTop:15,borderRadius: 15,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom:10}}>

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

    )
  }

  return (
    <View style={{
      flex: 1,marginLeft:20,marginRight:20
      }}>

      <View
       >
        <Text style={styles.manageTxt}>Manage Order</Text>

        <View style={{padding:5}}>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={data1}
            renderItem={renderItem}
            keyExtractor={(item) => item.value}
          />

        </View>

      </View>
      <Text style={styles.manageTxt1}>Manage Order</Text>


      <View style={{}}>
        <Dropdown
          placeholder={selectedCountry}
          data={countriesData}
          placeholderStyle={styles.placeHolderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          style={[styles.dropdown]}
          iconStyle={styles.iconStyle}
          maxHeight={300}
          value={selectedCountry}
          onChange={(selectedItem) => {
            // Handle the selected item here
            console.log('Selected item:', selectedItem);
            // You can set the selected item in your state if needed
            setSelectedCountry(selectedItem.value);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.label; // Text represented after the item is selected
          }}
          rowTextForSelection={(item, index) => {
            return item.label; // Text represented for each item in the dropdown
          }}
        >
        </Dropdown>
      </View>

      <View style={styles.orderView}>
        <Text style={styles.orderTxt}>Order Timeline</Text>
        <Text style={styles.orderTxt1}>#123456789</Text>
      </View>
      {/* <View style={{margin: 10, flexDirection: 'row',flex:0.5}}> */}
        <View style={{margin:8,justifyContent: 'center',flex:1}}>
          <StepIndicator
            stepCount={data.length}
            currentPosition={currentPosition} 
            labels={data.map(step => step.labels)}
            customStyles={customStyles}
            direction="vertical"
            setCurrentPosition={true}
          />
          </View>

        {/* </View> */}


    </View>
  );
};


const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeFinishedColor: 'green',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: 'green',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'green',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: 'green',
  stepIndicatorLabelCurrentColor: 'green',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: 'black',
  labelSize: 18,
};

export default Home;

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
  lable: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 10,
  },
  dropdown: {
    height: 50,
    width: "90%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginLeft: 10,
    position: 'absolute',
    backgroundColor: 'white'


  },
  placeHolderStyle: {
    fontSize: 16,
    color: 'gary',

  },
  iconStyle: {
    width: 40,
    height: 40,
  },
  selectedTextStyle: {
    fontSize: 10,
    color: 'gray',

  },
  manageTxt: { textAlign: 'center', 
  fontSize: 18, 
  fontWeight: 'bold', 
  color: 'black' 
},
  manageTxt1: { 
  fontSize: 18, fontWeight: 'bold', 
  color: 'black', 
  margin: 9, 
},
  orderView: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, margin: 10 },
  orderTxt: { fontSize: 18, fontWeight: 'bold', color: 'black', alignSelf: 'flex-end', marginTop: 40 },
  orderTxt1: { alignSelf: 'flex-start', fontSize: 14, fontWeight: '400', color: 'black', marginTop: 40 },

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
  FlatListStyle: {
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    paddingBottom: 5
  },
  OrdersProfileView: {
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
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
