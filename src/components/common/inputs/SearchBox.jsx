import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
  } from 'react-native';
  import React from 'react';
  import {COLORS} from '../../../constants/Colors';
  import SVGIcon from '../SvgIcon';
  
  const SearchBox = ({value, setValue, placeholder}) => {
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <SVGIcon
            name={'search'}
            height={24}
            width={24}
            fill="transparent"
            storkWidth={2}
          />
          <TextInput
            value={value}
            onChangeText={e => setValue(e)}
            style={styles.input}
            placeholderTextColor={COLORS.gray200}
            placeholder={placeholder}
          />
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default SearchBox;
  
  const styles = StyleSheet.create({
    input: {
      fontWeight: '500',
      fontSize: 16,
      color: '#000',
      width: '100%',
    },
    container: {
      borderWidth: 2,
      borderColor: COLORS.gray200,
      paddingHorizontal: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 6,
      height: 46,
    },
  });
  