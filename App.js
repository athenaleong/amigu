import React from 'react'
import 'react-native-gesture-handler';
import ApplicationNavigator from './src/Navigators/Application'
import {NativeBaseProvider} from 'native-base';

const App = () => (
  <NativeBaseProvider>
    <ApplicationNavigator />
  </NativeBaseProvider>
)

export default App