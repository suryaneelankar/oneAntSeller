import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React from 'react';
  import {COLORS} from '../../constants/Colors';
  import SVGIcon from '../common/SvgIcon';
  
  const PhoneInput = ({value, setValue}) => (
    <View style={styles.container}>
      <View style={styles.contryCodeContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/9906/9906480.png',
          }}
          height={24}
          width={24}
        />
        <Text style={styles.code}>+91</Text>
        <SVGIcon name="downArrow" height={16} width={16} fill="transparent" />
      </View>
  
      <KeyboardAvoidingView style={{width: '100%'}}>
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholder="Phone Number"
          style={styles.input}
          placeholderTextColor={'#aaa'}
          autoFocus={true}
          keyboardType="number-pad"
        />
      </KeyboardAvoidingView>
    </View>
  );
  
  export default PhoneInput;
  
  const styles = StyleSheet.create({
    container: {
      height: 52,
      paddingHorizontal: 10,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: COLORS.primary,
      padding: 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      color: '#000',
      fontSize: 16,
      fontWeight: '500',
      width: '80%',
    },
    contryCodeContainer: {
      borderRadius: 6,
      padding: 8,
      backgroundColor: COLORS.gray100,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    code: {
      fontSize: 14,
      fontWeight: '400',
      color: '#000',
      marginLeft: 8,
      marginRight: 1,
    },
  });
  