import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import React,{ useRef,useState }from 'react';
import { COLORS } from '../../constants/Colors';
import ActionSheet from 'react-native-actionsheet';


const ListProduct = () => {
    const data = [{ name: 'Add a photo', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }, { name: 'Add more', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }, { name: 'Add more', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }, { name: 'Add more', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }, { name: 'Add more' }]
    const data1 = [{ name: 'Product Details', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
    { name: 'Shipping & returns', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
    { name: 'Warranty', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }]


    const actionSheetRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState(null);

    const options = ['$50', '$40', '$30','$20','$10'];
  const destructiveButtonIndex = 1;
  const cancelButtonIndex = 2;
  const handlePress = (index) => {
    const selectedOption = options[index];
    // Handle the selected option
    console.log('Selected option:', options[index]);
    setSelectedValue(selectedOption);
  };

  const showActionSheet = () => {
    actionSheetRef.current.show();
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

                <Text style={{ alignSelf: "center", color:"#2A2A2A"}}>{item?.name}</Text>

            </View>
        )
    }

    return (
        <>
            <View style={{ flex: 1 }}>

                <Text style={styles.textinputStyle}>Add Photos</Text>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={data}
                        renderItem={renderItem} />
                </View>
               
                <ActionSheet
        ref={actionSheetRef}
        title={'Select an Option'}
        options={options}
        cancelButtonIndex={cancelButtonIndex}
        destructiveButtonIndex={destructiveButtonIndex}
        onPress={handlePress}
      />

                <ScrollView style={{ width: "90%", marginHorizontal: 20 }}>
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
                        <TouchableOpacity style={{padding:10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{flexDirection:"row",width:"100%"}}>
                        <Text style={{width:"90%"}}> {selectedValue}</Text>
                                    <Text style={{ fontSize: 19}}>{`v`}</Text>
                                    </View>
                                    </TouchableOpacity>
                        
                                    <TouchableOpacity style={{padding:10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{flexDirection:"row",width:"100%"}}>
                        <Text style={{width:"90%"}}> {selectedValue}</Text>
                                    <Text style={{ fontSize: 19}}>{`v`}</Text>
                                    </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{padding:10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{flexDirection:"row",width:"100%"}}>
                        <Text style={{width:"90%"}}> {selectedValue}</Text>
                                    <Text style={{ fontSize: 19}}>{`v`}</Text>
                                    </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{padding:10, borderRadius: 5, borderWidth: 1, borderColor: "lightgray", marginTop: 15 }} onPress={showActionSheet}>
                        <View style={{flexDirection:"row",width:"100%"}}>
                        <Text style={{width:"90%"}}> {selectedValue}</Text>
                                    <Text style={{ fontSize: 19}}>{`v`}</Text>
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
                                        <Text>{item.name}</Text>
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



            </View>
        </>
    );
};

export default ListProduct;

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
