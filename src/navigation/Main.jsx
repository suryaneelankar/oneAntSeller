import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

const Main = () => {
  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <AppStack />
    </NavigationContainer>
  );
};

export default Main;
