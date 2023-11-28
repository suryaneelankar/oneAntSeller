import React from 'react';
import {Dimensions, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('screen');

interface ChildrenType {
  children: React.ReactNode;
}

export const Upper: React.FC<ChildrenType> = ({children}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.upperContainer}>
        {/* <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}>
            <SVGIcon name="Close" width={32} height={32} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.contentContainer}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

export const Lower: React.FC<ChildrenType> = ({children}) => {
  return (
    <View style={styles.lowerContainer}>
      <View style={styles.lowerContentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: '#00000060',
  },
  closeButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  closeButton: {
    borderRadius: 50,
    backgroundColor: 'white',
  },
  contentContainer: {
    marginVertical: height * 0.03,
  },
  lowerContainer: {
    backgroundColor: '#00000060',
    height: height * 0.8,
  },
  lowerContentContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    bottom: 0,
  },
});
