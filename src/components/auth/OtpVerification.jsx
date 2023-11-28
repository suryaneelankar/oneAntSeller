import React, {useRef, useCallback} from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../constants/Colors';

const OtpVerification = ({code, setCode, phone, handleResend}) => {
  const inputRefs = useRef(
    Array(6)
      .fill(null)
      .map(() => React.createRef()),
  );

  const setInputRef = useCallback((index, input) => {
    if (input) {
      inputRefs.current[index] = input;
    }
  }, []);

  const handleInputChange = (text, index) => {
    const updatedOtp = [...code];
    updatedOtp[index] = text;
    setCode(updatedOtp);

    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (text.length === 1 && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter the code we've sent by SMS to {phone} :
      </Text>

      <View style={styles.inputContainer}>
        {code.map((value, index) => (
          <TextInput
            placeholderTextColor={'#aaa'}
            key={index}
            style={styles.input}
            maxLength={1}
            placeholder="-"
            keyboardType="numeric"
            ref={input => setInputRef(index, input)}
            onChangeText={text => handleInputChange(text, index)}
            value={value}
          />
        ))}
      </View>

      <Text style={[styles.title, styles.resendText]}>
        Haven’t received an SMS?{' '}
        <Text style={styles.resendLink} onPress={handleResend}>
          Send again
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.primary,
    width: '70%',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    borderWidth: 2,
    columnGap: Platform.OS === 'android' ? 2 : 10,
    borderRadius: 8,
    borderColor: COLORS.gray800,
    paddingVertical: 0,
    height: 50,
  },
  input: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  resendText: {
    marginTop: 20,
  },
  resendLink: {
    textDecorationLine: 'underline',
    color: '#000',
    fontWeight: '500',
  },
});

export default OtpVerification;
