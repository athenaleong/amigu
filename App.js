import React, {useEffect} from 'react'
import 'react-native-gesture-handler';
import ApplicationNavigator from './src/Navigators/Application'
import {NativeBaseProvider} from 'native-base';
import Theme from '@/Theme/Theme'
import { setMultiple } from '@/Services/AsyncStorage';

const App = () => {

  //TODO: Replace set up iwht 
  const setUp = async () => {
    await setMultiple([['@frontend:childAge', '6'], 
                    ['@frontend:childName', 'Hugo'],
                    ['@frontend:parentAddress', 'Dad']])
  }

  useEffect(() => {
    setUp()
  }, [])

  return (

  <NativeBaseProvider theme={Theme}>
    <ApplicationNavigator />
  </NativeBaseProvider>
  )
}

export default App