import {SafeAreaView} from 'react-native';
import React from 'react';
import Mainstack from './src/Navigation';
import { store,persistor } from './src/Redux/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'

export default function App() {
 
  return (
   <SafeAreaView style={{flex:1}}>
     <Provider store={store}>
       <PersistGate  persistor={persistor}>
      <Mainstack />
      </PersistGate>
    </Provider>
   </SafeAreaView>
  );
}
