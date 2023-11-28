import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SVGIcon from '../SvgIcon';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
});

const ScreenHeader = ({iconNode, name, style}) => {
  const {goBack} = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => goBack()}>
        <SVGIcon name="back_arrow" height={24} width={24} strokeWidth={1.5} />
      </TouchableOpacity>
      <View style={{position: 'absolute', width: '100%'}}>
        <Text style={styles.text}>{name}</Text>
      </View>

      {iconNode}
    </View>
  );
};

export default ScreenHeader;
