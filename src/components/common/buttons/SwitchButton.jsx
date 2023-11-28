import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SwitchButton = ({isTrue = false, setAccept}) => {
  return (
    <TouchableOpacity
      onPress={() => setAccept(!isTrue)}
      style={{
        backgroundColor: '#000',
        padding: 2,
        borderRadius: 100,
        height: 24,
        width: 44,
      }}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 100,
          backgroundColor: '#fff',
          alignSelf: isTrue ? 'flex-end' : 'flex-start',
        }}
      />
    </TouchableOpacity>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({});
