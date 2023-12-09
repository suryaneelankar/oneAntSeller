import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import React, { useRef, useState } from 'react';
import { COLORS } from '../../constants/Colors';
import ActionSheet from 'react-native-actionsheet';
import Modal from "react-native-modal";


const CustomActionSheetButton = ({ label, onPress, style, isSelected }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        // backgroundColor: style.backgroundColor || '#9038FF',
        borderWidth: 1,
        padding: 15,
        borderRadius: style.borderRadius || 10,
        borderColor: isSelected ? 'black' : style.backgroundColor || 'white',
      }}
      onPress={onPress}
    >
      
      <Text style={{ color: '#2A2A2A', fontSize: 16, fontWeight: '600' }}>{label}</Text>
      <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 30,
        borderWidth: 2,
        borderWidth:1,
        borderColor: isSelected ? 'white' : '#2A2A2A',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      }}
    >
      {isSelected && (
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: '#2A2A2A',
          }}
        />
      )}
    </View>

    </TouchableOpacity>
  );

const CustomModal = ({ options, onSelect, isVisible, onClose, selectedIndex }) => {
    return (
      <Modal isVisible={isVisible}>
        <View style={styles.actionSheetContainer}>
          <Text style={{fontSize:18,fontWeight:'600',alignSelf:'center',color:'#2A2A2A'}}>Select an Option</Text>
          {options.map((option, index) => (
            <CustomActionSheetButton
            key={index}
            label={option}
            onPress={() => {
              onSelect(index);
              onClose();
            }}
            style={{ backgroundColor: 'lightgray', borderRadius: 10, width: '90%' }}
            isSelected={selectedIndex === index}
          />
          ))}
          <TouchableOpacity style={{alignSelf:'flex-start'}} title="Customise" onPress={onClose} />
        </View>
      </Modal>
    );
  };

const ListProduct = () => {
    const data = [
        { name: 'Add a photo', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
        { name: 'Add more', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
        { name: 'Add more', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
        { name: 'Add more', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
        { name: 'Add more' }
    ];

    const data1 = [
        { name: 'Product Details', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
        { name: 'Shipping & returns', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
        { name: 'Warranty', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }
    ];

    const options = ['$50', '$40', '$30', '$20'];
    const [selectedValue, setSelectedValue] = useState(null);
    const [textValue, setTextValue] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleOptionSelect = (index) => {
        setSelectedIndex(index);
        const selectedOption = options[index];
        const selectedText = getTextValue(index);
        setSelectedValue(selectedOption);
        setTextValue(selectedText);
    };

    const getTextValue = (index) => {
        const textOptions = ['50%', '60%', '70%', '80%', '40%'];
        return textOptions[index];
    };

    const showActionSheet = () => {
        toggleModal();
    };

    const renderItem = ({ item }) => {
        return (
            <View style={{
                marginTop: 20, justifyContent: "center", width: 100, height: 100, margin: 10, borderRadius: 10, borderWidth: 1, borderColor: "gray", borderStyle: 'dashed',
            }}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 30, height: 30, alignSelf: "center" }}
                />
                <Text style={{ alignSelf: "center", color: "#2A2A2A" }}>{item?.name}</Text>
            </View>
        );
    };

    return (
        <>
            <View style={{ flex: 1 }}>
                <Button title="Show modal" onPress={toggleModal} />
                <CustomModal
                    options={options}
                    onSelect={handleOptionSelect}
                    isVisible={isModalVisible}
                    onClose={toggleModal}
                    selectedIndex={selectedIndex}
                />
            </View>

            <ScrollView style={{ width: "90%", marginHorizontal: 20 }}>
                <Text style={styles.textinputStyle}>Add Photos</Text>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={data}
                        renderItem={renderItem}
                    />
                </View>

                <CustomModal
                    options={options}
                    onSelect={handleOptionSelect}
                    isVisible={isModalVisible}
                    onClose={toggleModal}
                />

                <Text style={styles.textStyle}>Product Name</Text>
                <TextInput
                    style={{ borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }}
                    placeholder='Enter Product name'
                />
                <View>
                    <Text style={styles.textStyle}>Set Price</Text>
                    <TextInput
                        lable='Actual price'
                        style={{ borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }}
                        placeholder='$100'
                    />

                </View>

                <View>
                    <Text style={styles.textStyle}>Set Discount</Text>
                    <TouchableOpacity style={{ padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <Text style={{ width: "90%" }}>
                                <Text>{selectedValue}</Text> <Text style={{ color: '#53B483' }}>{textValue}</Text>
                            </Text>
                            <Text style={{ fontSize: 19 }}>{`v`}</Text>
                        </View>


                    </TouchableOpacity>



                    <TouchableOpacity style={{ padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <Text style={{ width: "90%" }}>
                                <Text>{selectedValue}</Text> <Text style={{ color: '#53B483' }}>{textValue}</Text>
                            </Text>
                            <Text style={{ fontSize: 19 }}>{`v`}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <Text style={{ width: "90%" }}>
                                <Text>{selectedValue}</Text> <Text style={{ color: '#53B483' }}>{textValue}</Text>
                            </Text>
                            <Text style={{ fontSize: 19 }}>{`v`}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <Text style={{ width: "90%" }}>
                                <Text>{selectedValue}</Text> <Text style={{ color: '#53B483' }}>{textValue}</Text>
                            </Text>
                            <Text style={{ fontSize: 19 }}>{`v`}</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={styles.textStyle}>Set Deal Expiry</Text>
                    <TextInput
                        lable='Actual price'
                        style={{ borderRadius: 10, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }}
                        placeholder='09:09:00'
                    />
                </View>
                <View style={{ borderRadius: 20, borderWidth: 1, borderColor: "lightgray", marginTop: 20 }}>
                    {data1.map((item, index) => (
                        <View key={index} style={{ marginHorizontal: 20, alignItems: 'center', marginVertical: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row", width: "85%" }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ width: 30, height: 30, marginRight: 10 }}
                                    />
                                    <TouchableOpacity onPress={showActionSheet}>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={showActionSheet}>
                                    <Text style={{ fontSize: 24, marginLeft: 30 }}>{`>`}</Text>
                                </TouchableOpacity>
                            </View>
                            {index <= item?.length ?
                                <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, width: "100%" }} />
                                : <></>}
                        </View>
                    ))}
                </View>

                <View style={{ width: "100%", alignSelf: "center", borderRadius: 20, borderWidth: 1, borderColor: "lightgray", margin: 15, padding: 15 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", width: "85%" }}>
                            <Image
                                source={{ uri: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }}
                                style={{ width: 30, height: 30, marginRight: 10 }}
                            />
                            <Text>Promotion Tools</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 24, marginLeft: 30 }}>{`>`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={{ color: "#2A2A2A", fontSize: 14, fontWeight: "400" }}>Your order ships carbon neutral</Text>

                <View style={{ flexDirection: "row", margin: 30, justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ width: "45%", borderColor: "#9038FF", borderWidth: 1, padding: 10, borderRadius: 5, alignItems: "center" }}>
                        <Text style={{ color: "#9038FF", fontSize: 16, fontWeight: "600" }}>Preview</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: "45%", borderColor: "#9038FF", backgroundColor: "#9038FF", borderWidth: 1, padding: 10, borderRadius: 5, alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 16, fontWeight: "600", }}>Publish</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* </View > */}
        </>
    );
};

export default ListProduct;

const styles = StyleSheet.create({
    actionSheetContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 10,
        backgroundColor: 'white',

    },
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
    textinputStyle: {
        marginTop: 50,
        marginHorizontal: 20,
        color: "#2A2A2A",
        fontSize: 16,
        fontWeight: "500"
    },
    textStyle: {
        color: "#2A2A2A",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 20
    },
});
