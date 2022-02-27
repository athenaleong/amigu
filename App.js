import React, {useEffect, useState} from 'react'
import 'react-native-gesture-handler';
import ApplicationNavigator from './src/Navigators/Application'
import { View, Text, Image } from 'react-native';
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
import AppLoading from 'expo-app-loading';
import { Asset, useAssets } from 'expo-asset';



const App = () => {

const [assetsLoaded, setAssetsLoaded] = useState(false);


  //TODO: Figure out how to persist across updates
  const setUp = async () => {
    await setMultiple([['@frontend:childAge', '6'], 
                    ['@frontend:childName', 'Hugo'],
                    ['@frontend:parentAddress', 'Dad'],
                    ['@frontend:petHeight', '30'],
                    ['@frontend:petWeight', '0.5'],
                    ['@frontend:numAdventures', '0'],
                    ['@frontend:numFish', '0'],

                  ])

    //TODO: Get Treasure Name dynamically 
    await storeData('@frontend:treasureCollection', {'dance':[1003, 1007], 'fish':[2004, 2006, 2007], 'fidgets':[3005]})
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

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require("@/Assets/background/treehouse-background.jpeg"),
      require("@/Assets/background/under-the-sea.jpeg"),
      require('@/Assets/penguin/Angry.png'),
      require('@/Assets/penguin/Cheer.png'),
      require('@/Assets/penguin/Confused.png'),
      require('@/Assets/penguin/Sad.png'),
      require('@/Assets/penguin/Smile.png'),
      require('@/Assets/background/background.png'),
      require('@/Assets/penguin/Waddle.gif'),
      require('@/Assets/background/fish-background.jpeg'),
      require('@/Assets/wave.gif'),
      require('@/Assets/background/arctic-background.jpeg'),
      require('@/Assets/still.png'),
      'https://fnnsvyluqwpbgqnpnvjz.supabase.in/storage/v1/object/sign/treasure/sea-animal-still/turtle.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmVhc3VyZS9zZWEtYW5pbWFsLXN0aWxsL3R1cnRsZS5wbmciLCJpYXQiOjE2NDM4NjU3OTEsImV4cCI6MTk1OTIyNTc5MX0.aPT_2PB6a1Y5zxNjljD2MA51zH22fulz66M2ANG_23s',
      'https://fnnsvyluqwpbgqnpnvjz.supabase.in/storage/v1/object/sign/treasure/sea-animal-still/puffer.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmVhc3VyZS9zZWEtYW5pbWFsLXN0aWxsL3B1ZmZlci5wbmciLCJpYXQiOjE2NDM4NjU3NDQsImV4cCI6MTk1OTIyNTc0NH0.bUAjS51P9oMLYsURcfF0pzIGAZ7dvFjfj1rnsizO_ww',
      'https://fnnsvyluqwpbgqnpnvjz.supabase.in/storage/v1/object/sign/treasure/sea-animal-still/seal.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmVhc3VyZS9zZWEtYW5pbWFsLXN0aWxsL3NlYWwucG5nIiwiaWF0IjoxNjQzODY1NzQ5LCJleHAiOjE5NTkyMjU3NDl9.KKmWk2-FKIfBqos5uYeFPdRSS5aSGHidie9Hlu0HPPE',
      'https://fnnsvyluqwpbgqnpnvjz.supabase.in/storage/v1/object/sign/treasure/sea-animal-gif/seal.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmVhc3VyZS9zZWEtYW5pbWFsLWdpZi9zZWFsLmdpZiIsImlhdCI6MTY0Mzg3MDY1MywiZXhwIjoxOTU5MjMwNjUzfQ.iEIUzkm4eUbYHBjnkjM6OPYjc8ig1jVguuS2ZbTrZqY',
      'https://fnnsvyluqwpbgqnpnvjz.supabase.in/storage/v1/object/sign/treasure/sea-animal-gif/puffer.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmVhc3VyZS9zZWEtYW5pbWFsLWdpZi9wdWZmZXIuZ2lmIiwiaWF0IjoxNjQzODY1NjA1LCJleHAiOjE5NTkyMjU2MDV9.iYNAy7jW1LfaFfADSWTmfZ4FxuGf50Qn-R56zfgeaSo',
      'https://fnnsvyluqwpbgqnpnvjz.supabase.in/storage/v1/object/sign/treasure/sea-animal-gif/turtle.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0cmVhc3VyZS9zZWEtYW5pbWFsLWdpZi90dXJ0bGUuZ2lmIiwiaWF0IjoxNjQzODY1NjgxLCJleHAiOjE5NTkyMjU2ODF9.UAQ6r9sJD6n1lADcqXJ8rpAYH_4QZmGhh8q_zNaI7v8'
    ]);

    

    await Promise.all([...imageAssets]);
  }

  //Cache Images
  function cacheImages(images) {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
   }
    

  // if (!fontsLoaded) {
  //   return (
  //     <NativeBaseProvider theme={Theme}>
  //       <ModalView state='loading' visible={true}/>
  //     </NativeBaseProvider>
  //   )
  // }

  if (!assetsLoaded || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
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