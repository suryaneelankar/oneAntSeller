import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface TransparentModalWrapperProps {
  children: ReactNode;
  upperHeight?: string;
  lowerHeight?: string;
  fullBg?: string;
  lowerBg?: string;
}

const {height} = Dimensions.get('screen');

const TransparentModalWrapper: React.FC<TransparentModalWrapperProps> = ({
  children,
  upperHeight = '20%',
  lowerHeight = '80%',
  fullBg = '#00000040',
  lowerBg = 'white',
}) => {
  const navigation = useNavigation();

  const goBackCTA = () => {
    navigation.goBack();
  };

  const inlinStyles = StyleSheet.create({
    main: {flex: 1, backgroundColor: fullBg},
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: upperHeight as any,
    },
    closeCTA: {
      borderRadius: 50,
      backgroundColor: 'white',
    },
    viewContainer: {
      height: lowerHeight as any,
      backgroundColor: lowerBg,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: 'hidden',
      flex: 1,
      // overflow: 'hidden',
    },
  });

  return (
    <View style={inlinStyles.main}>
      <TouchableOpacity style={inlinStyles.container} onPress={goBackCTA}>
        {/* <View style={inlinStyles.closeCTA}>
          <SVGIcon name="Close" width={32} height={32} strokeWidth="1" />
        </View> */}
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={inlinStyles.viewContainer}>{children}</View>
      </ScrollView>
      {/* <VirtualizedList
        style={inlinStyles.viewContainer}
        data={[{}]}
        initialNumToRender={1}
        renderItem={({item}) => <View>{children}</View>}
        keyExtractor={item => String(item)}
        getItemCount={() => 1}
        getItem={() => ({})}
      /> */}
    </View>
  );
};

export default TransparentModalWrapper;
