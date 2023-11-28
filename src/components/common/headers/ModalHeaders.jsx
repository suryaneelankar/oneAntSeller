import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../constants/Colors';
import SVGIcon from '../SvgIcon';

const ModalHeaders = ({label, modalHeaderStyle}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SVGIcon name="close" height={24} width={24} strokeWidth={1.5} />
      </TouchableOpacity>
      <Text style={[styles.h1, modalHeaderStyle]}>{label}</Text>
    </View>
  );
};

export default ModalHeaders;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.gray100,
  },
  h1: {
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
    marginLeft: '27%',
  },
});
