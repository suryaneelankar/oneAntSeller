import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SVGIcon from '../SvgIcon';
import {COLORS} from '../../../constants/Colors';

function SecondaryButton({title, onPress, iconName, style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, style]}
      activeOpacity={0.7}>
      <View style={styles.container}>
        {iconName && <SVGIcon name={iconName} height={24} width={24} />}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: `${COLORS.blue500}50`,

    paddingVertical: 12,
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    columnGap: 12,
  },
  title: {
    color: COLORS.blue500,
    fontSize: 18,
    fontWeight: '600',
  },
});
