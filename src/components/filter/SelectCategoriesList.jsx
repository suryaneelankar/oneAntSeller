import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import SVGIcon from '../common/SvgIcon';
  import {COLORS} from '../../constants/Colors';
  import useAppStore from '../../utils/zustand/useAppStore';
  
  function Filters({id, image, label, onSelect, isSelected}) {
    const handlePress = () => {
      onSelect(id);
    };
  
    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
        <View style={[styles.tileContainer, isSelected && styles.selected]}>
          <View style={styles.imagesContainer}>
            <View style={styles.titleImageContainer}>
              <Image
                source={{
                  uri: image,
                }}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
            {isSelected && (
              <View style={styles.checkContainer}>
                <SVGIcon
                  name={'white_check'}
                  height={14}
                  width={14}
                  fill="transparent"
                />
              </View>
            )}
          </View>
          <Text style={styles.title}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  function SelectCategoriesList({data, selected, setSelected}) {
    const {productCategory} = useAppStore(state => state);
  
    const onSelect = index => {
      setSelected(
        selected.includes(productCategory[index]?._data?.name.toLowerCase())
          ? selected.filter(
              id => id !== productCategory[index]?._data?.name.toLowerCase(),
            )
          : [...selected, productCategory[index]?._data?.name.toLowerCase()],
      );
    };
  
    const renderItem = ({item, index}) => (
      <Filters
        key={index}
        id={index}
        label={item?._data?.name}
        image={item?._data?.image}
        onSelect={onSelect}
        isSelected={selected.includes(item?._data?.name?.toLowerCase())}
      />
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      margin: 10,
      alignSelf: 'center',
      marginBottom: 60,
    },
    tileContainer: {
      minWidth: '45%',
      minHeight: '25%',
      borderWidth: 2,
      borderRadius: 12,
      borderColor: COLORS.gray200,
      paddingVertical: 24,
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    selected: {
      borderColor: COLORS.blue500,
    },
    imagesContainer: {
      width: 80,
      height: 80,
      // marginVertical: 8,
    },
    titleImageContainer: {
      width: 80,
      height: 80,
      // borderWidth: 1,
      borderRadius: 40,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    title: {
      marginTop: 10,
      fontSize: 16,
      color: 'black',
    },
    checkContainer: {
      backgroundColor: COLORS.blue500,
      width: 25,
      height: 25,
      borderRadius: 99,
      zIndex: 1,
      position: 'absolute',
      right: 0,
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default SelectCategoriesList;
  