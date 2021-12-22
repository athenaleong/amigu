import React, { useState, useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Button,
  Container,
} from "native-base";
import Action from '@/Components/Action/action'
import { SafeAreaView } from "react-native-safe-area-context";
import FocusAreaContainer from "./FocusAreaContainer";
import { navigate } from "@/Navigators/utils";
import { getData } from "@/Services/AsyncStorage";
import axios from "axios";
import { storeData, getMultiple} from "../Services/AsyncStorage";


const HomeContainer = () => {
    const topMargin = 6
    const [childName, setChildName] =  useState('');
    const [parentAddress, setParentAddress] = useState('');

    const readItemFromStorage = async() => {
      const name = await getMultiple(['@frontend:childName', '@frontend:parentAddress']);
      setChildName(name[0][1]);
      setParentAddress(name[1][1])
    }

    useEffect(() => {
      readItemFromStorage()
    }, [])

    const onPress = async () => {

      //Curate new Questions via API call and save to Async Storage
      let usedQuestions = await getData('@frontend:usedQuestions')
      usedQuestions = usedQuestions ? usedQuestions : [] 
      const data = {'numQ': 7, 'oldQ':usedQuestions}
      const newQuesitons = await getData('@frontend:newQuesitons')

      //Curate new Questions if new Question doesn't exists
      if (!newQuesitons) {
        const res = await axios.post('https://tweeby-backend.herokuapp.com/newQuestions', data)
        await storeData('@frontend:newQuesitons', res.data.newQ)
      }
      navigate('Prepare')

    }
    return (
      <SafeAreaView>
          <VStack alignItems="center">
            <Text color="black" variant='title'>{childName} & {parentAddress}</Text>

            <HStack>
              <Text color="black">3</Text>
              <Text color="black">Chat in 2 days</Text>
            </HStack>

            <Action title={"Prepare Questions"} subtitle={'Make changes to curated questions or add your own'} onPress={onPress}></Action>

            <FocusAreaContainer></FocusAreaContainer>
            
          </VStack>
      </SafeAreaView>
    )
}


export default HomeContainer
