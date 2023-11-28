import {KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';

const InputBox = ({value, setValue, placeholder}) => {
  return (
    <KeyboardAvoidingView>
      <TextInput
        value={value}
        onChangeText={e => setValue(e)}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#aaa'}
      />
    </KeyboardAvoidingView>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: COLORS.gray100,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingVertical: 8,
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
    height: 50,
  },
});
