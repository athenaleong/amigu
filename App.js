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
                    ['@frontend:petHeight', '30'],
                    ['@frontend:petWeight', '0.5']
                  ])

    //TODO: Get Treasure Name dynamically 
    await storeData('@frontend:treasureCollection', {'dance':[1003, 1007], 'drinks':[2001], 'fidgets':[3005]})
    await storeData('@frontend:newQuestions', []);
    await storeData('@frontend:usedQuestions', []);

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