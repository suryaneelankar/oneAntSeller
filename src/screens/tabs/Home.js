import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../constants/Colors';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';

const Home = () => {
  const data1 = [
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' },
    { name: 'Total Price', value: '$90' }
  ]
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  const countriesData = countries.map(country => ({ label: country, value: country }));
  const [selectedCountry, setSelectedCountry] = useState([])
  const [currentPosition, setCurrentPosition] = useState(2)
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
      <View style={{
        marginTop: 20, justifyContent: "center", width: 100, height: 100, margin: 10, borderRadius: 10, borderWidth: 1, borderColor: "gray", borderStyle: 'dashed',

      }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 0, height: 30, alignSelf: "center" }}
        />

        <Text style={{ alignSelf: "center", color: "#2A2A2A" }}>{item?.name}</Text>

      </View>

    )
  }

  return (
    <View style={{
      flex: 1,
    }}>

      <View
        style={{
          width: '100%',
          // backgroundColor: 'blue',
          padding: 10,
        }}>
        <Text style={styles.manageTxt}>Manage Order</Text>

        <View>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data1}
            renderItem={renderItem}
            keyExtractor={(item) => item.value}
          />

        </View>

        <View style={{ borderWidth: 2, height: 50, width: '100%' }}>

        </View>

      </View>
      <Text style={styles.manageTxt1}>Manage Order</Text>


      <View style={{ flex: 0.1 }}>
        <Dropdown
          placeholder='Select a country'
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
            setSelectedCountry(selectedItem);
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
      <View style={{ flex: 0.5, margin: 10, flexDirection: 'row' }}>
        <View style={{ flex: 0.5, justifyContent: 'center', }}>
          <StepIndicator
            stepCount={data.length}
            currentPosition={currentPosition} // Set the current position based on your logic
            labels={data.map(step => step.labels)}
            customStyles={customStyles}
            direction="vertical"
            setCurrentPosition={true}
          />
        </View>

      </View>


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
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: 'green',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: 'black',
  labelSize: 10,
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
    color: 'gray',

  },
  iconStyle: {
    width: 40,
    height: 40,
  },
  selectedTextStyle: {
    fontSize: 10,
    color: COLORS.blue500

  },
  manageTxt: { textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'black' },
  manageTxt1: { justifyContent: 'space-around', fontSize: 18, fontWeight: 'bold', color: 'black', margin: 10, },
  orderView: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, margin: 10 },
  orderTxt: { fontSize: 18, fontWeight: 'bold', color: 'black', alignSelf: 'flex-end', marginTop: 30 },
  orderTxt1: { alignSelf: 'flex-start', fontSize: 14, fontWeight: '400', color: 'black', marginTop: 30 },

});
