import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';

const CheckBox = ({isChecked = true}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isChecked ? 'black' : 'white',
        },
      ]}>
      <View style={[styles.checkBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    height: 10,
    width: 10,
    borderRadius: 99,
    borderColor: '#707070',
    backgroundColor: 'white',
  },
  container: {
    height: 24,
    width: 24,
    borderRadius: 99,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.gray100,
  },
});

export default CheckBox;
