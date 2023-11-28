import {Animated, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, memo} from 'react';

const Skeleton = ({skeletonStyle, data = [1]}) => {
  const skeletonOpacity = new Animated.Value(0);

  useEffect(() => {
    startShimmer();
  }, []);

  const startShimmer = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(skeletonOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(skeletonOpacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={{alignSelf: 'center'}}
      data={data}
      horizontal
      renderItem={() => (
        <Animated.View
          style={[styles.skeleton, {opacity: skeletonOpacity}, skeletonStyle]}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    height: 300,
    width: '100%',
    backgroundColor: '#FF274E12',
    marginHorizontal: 6,
  },
});

export default memo(Skeleton);
