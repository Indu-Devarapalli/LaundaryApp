import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import _layout from './app/(authenticate)/_layout'; 
import { Provider } from 'react-redux'; // Import Provider
import  store from './store';


const App = () => {
  return (
    <Provider store={store}> 
    
       <_layout /> 
    
    </Provider>
  );
};

export default App;