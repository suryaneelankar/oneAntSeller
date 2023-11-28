import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';

import useAppStore from '../../../utils/zustand/useAppStore';
import Loader from '../loaders/Loader';

const PrimaryButton = ({label, onPress, style}) => {
  const isLoading = useAppStore(state => state.isLoading);

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.6}>
      {isLoading ? <Loader /> : <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
    shadowColor: COLORS.red,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
