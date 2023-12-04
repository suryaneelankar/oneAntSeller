import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
// import useAppStore from '../../utils/zustand/useAppStore';
// import useFilterStore from '../../utils/zustand/useFilterStore';
import { useNavigation } from '@react-navigation/native';

const PickInterests = () => {
  const navigation = useNavigation();

  const data1 = [{ name: 'Home Decor', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
  { name: 'Electronics', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
  { name: 'Wellness', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
  { name: 'Fashion', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
  { name: 'Kitchen', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
  { name: 'Travel', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
  { name: 'DIY Tool', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' },
  { name: 'Pets', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png' }]

  const renderItem = ({ item }) => {
    return (
      <View style={{
        marginTop: 10, justifyContent: "center", width: 150, height: 130, margin: 5, borderRadius: 10, borderWidth: 1, borderColor: "lightgray",
      }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 30, height: 30, alignSelf: "center" }}
        />

        <Text style={{ alignSelf: "center", marginTop: 20, color: "#2A2A2A" }}>{item?.name}</Text>

      </View>
    )
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Text style={styles.h1}>What are you selling?</Text>
        <Text style={styles.desc}>Select all that you sell</Text>

        <View style={{ width: "100%", alignItems: "center" }}>
          <FlatList
            numColumns={2}
            data={data1}
            renderItem={renderItem} />
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: 10,
        }}>
        <PrimaryButton style={{ backgroundColor: "#9038FF" }} label={'Get Results'} onPress={() => navigation.navigate('BottomTabs')} />
      </View>
    </>
  );
};

export default PickInterests;

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
});