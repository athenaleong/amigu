import React from 'react'
import 'react-native-gesture-handler';
import ApplicationNavigator from './src/Navigators/Application'
import {NativeBaseProvider} from 'native-base';
import Theme from '@/Theme/Theme'

const App = () => (
  <NativeBaseProvider theme={Theme}>
    <ApplicationNavigator />
  </NativeBaseProvider>
)

export default App