import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loader = ({size, color}) => {
  return <ActivityIndicator size={size || 20} color={color || '#fff'} />;
};

export default Loader;
