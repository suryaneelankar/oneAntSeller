import React from 'react';
import Main from './src/navigation/Main';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const App = () => {
  return <Main />;
  
};

export default App;
