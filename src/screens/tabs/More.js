import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';

const More = () => {

  return (
    <>

      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          padding: 10,
        }}>
        <PrimaryButton label={'More Screen'} />
      </View>
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
  lable: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 10,
  },
});
