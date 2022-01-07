import React, {useEffect} from 'react'
import 'react-native-gesture-handler';
import ApplicationNavigator from './src/Navigators/Application'
import {NativeBaseProvider} from 'native-base';
import Theme from '@/Theme/Theme'
import { setMultiple } from '@/Services/AsyncStorage';
import { storeData } from './src/Services/AsyncStorage';
import ModalView from '@/Components/Modal/ModalView.js'
import { 
  useFonts,
  BalooDa2_400Regular,
  BalooDa2_500Medium,
  BalooDa2_600SemiBold,
  BalooDa2_700Bold,
  BalooDa2_800ExtraBold 
} from '@expo-google-fonts/baloo-da-2'

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

  //Load Font
  let [fontsLoaded] = useFonts({
    BalooDa2_400Regular,
    BalooDa2_500Medium,
    BalooDa2_600SemiBold,
    BalooDa2_700Bold,
    BalooDa2_800ExtraBold 
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={Theme}>
        <ModalView state='loading' visible={true}/>
      </NativeBaseProvider>
    )
  }
  else {
    return (
      <NativeBaseProvider theme={Theme}>
        <ApplicationNavigator />
      </NativeBaseProvider>
    )
  }
}

export default App