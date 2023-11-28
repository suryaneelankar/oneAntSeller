import React, {useState} from 'react';
import {View, FlatList, ViewStyle} from 'react-native';

const AppSlider = ({
  data,
  dotSize = 8,
  activeColor = '#ffffff',
  inActiveColor = '#ffffff40',
  renderItem,
  dotsContainerStyle,
  ...props
}) => {
  const [currentindex, setCurrentindex] = useState(0);

  return (
    <>
      <View style={dotsContainerStyle}>
        {data?.length === 1 ? null : (
          <Dots
            currindex={currentindex}
            data={data}
            activeColor={activeColor}
            inActiveColor={inActiveColor}
            dotSize={dotSize}
          />
        )}
      </View>

      <FlatList
        pagingEnabled
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        {...props}
        renderItem={renderItem}
        onScroll={event => {
          setCurrentindex(
            Math.round(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            ),
          );
        }}
      />
    </>
  );
};

const Dots = ({currindex, data, dotSize, activeColor, inActiveColor}) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({index}) => (
        <View
          style={{
            height: 5,
            width: dotSize,
            backgroundColor: currindex === index ? activeColor : inActiveColor,
            borderRadius: 60,
            flexDirection: 'row',
            marginHorizontal: 3,
          }}
        />
      )}
    />
  );
};

export default AppSlider;
