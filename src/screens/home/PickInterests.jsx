import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/Colors';
import MilesFilter from '../../components/filter/MilesFilter';
import SelectCategoriesList from '../../components/filter/SelectCategoriesList';
import BottomSheetPicker from '../../components/common/BottomSheetPicker';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
import useAppStore from '../../utils/zustand/useAppStore';
import useFilterStore from '../../utils/zustand/useFilterStore';
import HomeDecor from '../../assets/SellerImages/homeDecor.svg';
import Fashion from '../../assets/SellerImages/fashion.svg';
import Pets from '../../assets/SellerImages/pets.svg';
import { SvgXml } from 'react-native-svg';

const PickInterests = () => {
  const {productCategory} = useAppStore(state => state);
  const {
    selectedProductCategory,
    setSelectedProductCategory,
    setSelectedMiles,
    selectedMiles,
    selectedStores,
    setSelectedStores,
  } = useFilterStore(state => state);

  console.log("selectedproducr***************",selectedProductCategory);

  const imagesStatic = [{
    name: 'Home',
    Image: require("../../assets/SellerImages/homeDecor.svg"),
  },{
    name: 'Fashion',
    Image: require('../../assets/SellerImages/fashion.svg')
  },{}];


  return (
    <>
      <View style={{flex: 1}}>
        <Text style={styles.h1}>What are you selling?</Text>
        <Text style={styles.desc}>Select all that you sell</Text>

        {/* <Text style={[styles.lable, {marginBottom: 10}]}>Store</Text>
        <BottomSheetPicker
          placeholder={selectedStores || 'Select a Store'}
          data={['1', 'v', 'sds', 'fde', 'efd']}
          onPress={item => setSelectedStores(item)}
        /> */}

        {/* <Text style={styles.lable}>Search Within</Text>
        <MilesFilter selected={selectedMiles} setSelected={setSelectedMiles} /> */}

        

        <SelectCategoriesList
          data={productCategory}
          selected={selectedProductCategory}
          setSelected={setSelectedProductCategory}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: 10,
        }}>
        <PrimaryButton label={'Get Results'} />
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
