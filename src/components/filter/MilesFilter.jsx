import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/Colors';

const DistanceOption = ({option, onSelect, isSelected}) => {
  const backgroundColor = isSelected ? COLORS.primary : '#ffffff';
  const textColor = isSelected ? '#ffffff' : COLORS.gray800;

  return (
    <TouchableOpacity
      onPress={() => onSelect(option)}
      style={[styles.option, {backgroundColor}]}>
      <Text style={[styles.optionText, {color: textColor}]}>
        {option} Miles
      </Text>
    </TouchableOpacity>
  );
};

const MilesFilter = ({selected, setSelected}) => {
  const options = [10, 20, 30, 40]; // Distances

  const onSelect = option => {
    // Toggle the selection state
    setSelected(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <DistanceOption
            option={option}
            onSelect={onSelect}
            isSelected={option === selected}
          />
          {/* Separator between distances */}
          {index < options.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

export default MilesFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    alignSelf: 'center',
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: COLORS.gray200,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2.5%',
    width: '22.5%',
  },
  option: {
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 8,
    width: '97%',
  },
  optionText: {
    fontSize: 14,
    textAlign: 'center',
  },
  separator: {
    height: '80%',
    width: 1,
    backgroundColor: COLORS.gray200,
    marginLeft: '7%',
  },
});
