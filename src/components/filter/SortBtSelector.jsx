import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import SVGIcon from '../common/SvgIcon';
import {COLORS} from '../../constants/Colors';

const SortBySelector = ({options, selectedOption, setSelectedOption}) => {
  const handleSelectOption = optionId => {
    // Toggle the selection state
    setSelectedOption(optionId);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View key={option.id}>
          <TouchableOpacity
            onPress={() => handleSelectOption(option.id)}
            style={styles.optionContainer}
            activeOpacity={0.8}>
            <View style={styles.icon}>
              <SVGIcon
                name={option.icon}
                fill="transparent"
                height={24}
                width={24}
              />
            </View>

            <Text style={styles.title}>{option.title}</Text>
            <View
              style={[
                styles.radioButton,
                selectedOption === option.id && {backgroundColor: '#2A2A2A'},
              ]}>
              {selectedOption === option.id && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
          </TouchableOpacity>
          {index !== options.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 'auto',
    width: '100%',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: COLORS.gray200,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: COLORS.primary,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.gray200,
  },
});

export default SortBySelector;
