import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';
import SVGIcon from '../SvgIcon';

import useAppStore from '../../../utils/zustand/useAppStore';
import Loader from '../loaders/Loader';

const PrimaryButtonWithIcon = ({label, iconName, onPress}) => {
  const isLoading = useAppStore(state => state.isLoading);
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <View style={{position: 'absolute', left: 14}}>
            <SVGIcon name={iconName} height={24} width={25} />
          </View>
          <Text style={styles.label}>{label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButtonWithIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray800,
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
