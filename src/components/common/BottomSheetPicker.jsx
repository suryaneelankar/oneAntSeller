import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {COLORS} from '../../constants/Colors';

const BottomSheetPicker = ({
  placeholder,
  buttonStyle,
  placeholderStyle,
  itemContainerStyle,
  itemStyle,
  data,
  onPress,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleModalVisibility = () => {
    setIsOpened(!isOpened);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleModalVisibility}>
        <View style={[styles.buttonContent, buttonStyle]}>
          <Text style={[styles.placeholder, placeholderStyle]}>
            {placeholder}
          </Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2985/2985150.png',
            }}
            style={styles.dropIcon}
          />
        </View>
      </TouchableOpacity>

      <Modal
        visible={isOpened}
        onRequestClose={handleModalVisibility}
        animationType="slide"
        transparent={true}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={handleModalVisibility}
        />
        <View style={styles.modalContent}>
          <FlatList
            data={data}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              const label = item;
              const isSelected = label === placeholder;
              return (
                <TouchableOpacity
                  onPress={() => {
                    onPress(item, index);
                    handleModalVisibility();
                  }}
                  style={itemContainerStyle}>
                  <Text
                    style={[
                      styles.item,
                      itemStyle,
                      isSelected && styles.itemBg,
                    ]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheetPicker;

const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '96%',
    alignSelf: 'center',
  },
  placeholder: {
    fontSize: 14,
    color: COLORS.gray800,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    maxHeight: 360,
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 20,
    paddingVertical: 20,
    position: 'absolute',
    zIndex: 999,
    bottom: 10,
    alignSelf: 'center',
  },
  item: {
    fontSize: 14,
    color: 'black', // Replace with your color variable or value
    textAlign: 'center',
    paddingVertical: 10,
  },
  separator: {
    borderBottomWidth: 1,
    marginHorizontal: 30,
    borderColor: COLORS.gray200, // Replace with your color variable or value
  },
  itemBg: {
    backgroundColor: COLORS.gray100, // Replace with your color variable or value
    borderRadius: 6,
    margin: 2,
  },
  dropIcon: {
    height: 16,
    width: 16,
  },
});
