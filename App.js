import React, {useEffect} from 'react'
import 'react-native-gesture-handler';
import ApplicationNavigator from './src/Navigators/Application'
import {NativeBaseProvider} from 'native-base';
import Theme from '@/Theme/Theme'
import { setMultiple } from '@/Services/AsyncStorage';
import { storeData } from './src/Services/AsyncStorage';

const App = () => {

  //TODO: Figure out how to persist across updates
  const setUp = async () => {
    await setMultiple([['@frontend:childAge', '6'], 
                    ['@frontend:childName', 'Hugo'],
                    ['@frontend:parentAddress', 'Dad'],
                  ])

    //TODO: Get Treasure Name dynamically 
    await storeData('@frontend:treasures', {'dance':[], 'drinks':[], 'fidgets':[]})
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