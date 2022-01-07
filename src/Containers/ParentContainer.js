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
import ModalView from "@/Components/Modal/ModalView";
import useModal from "@/Hooks/useModal";
import { navigateAndSimpleReset } from '@/Navigators/utils';

//Parent Facing Container
const ParentContainer = () => {

    const [childName, setChildName] =  useState('');
    const [parentAddress, setParentAddress] = useState('');
    const [modalState, isModal, showModal, hideModal] = useModal();


    //TODO: Change to UseReducer or dict instead of multiple useState
    //rad variables from AsyncStorage
    const readItemFromStorage = async() => {
      const name = await getMultiple(['@frontend:childName', '@frontend:parentAddress']);
      setChildName(name[0][1]);
      setParentAddress(name[1][1]);
    }

    useEffect(() => {
      readItemFromStorage()
    }, [])

    const onPress = async () => {
      showModal('transition');

      //Curate new Questions via API call and save to Async Storage
      let usedQuestions = await getData('@frontend:usedQuestions')
      usedQuestions = usedQuestions ? usedQuestions : [] 
      const data = {'numQ': 7, 'usedQ':usedQuestions}
      const newQuestions = await getData('@frontend:newQuestions')

      //Curate new Questions if new Question doesn't exists
      if (!newQuestions || newQuestions.length == 0) {
        const res = await axios.post('https://tweeby-backend.herokuapp.com/newQuestions', data)
        await storeData('@frontend:newQuestions', res.data.newQ)
      } 
      navigate('Prepare')
      hideModal();


    }
    return (
      <>
      <ModalView visible={isModal} state={modalState} />
      <SafeAreaView>
          <VStack alignItems="center">
            <Button onPress={() => {navigateAndSimpleReset('Pet')}}>Back</Button>
            <Text color="black" variant='title'>{childName} & {parentAddress}</Text>

            <HStack>
              <Text color="black">3</Text>
              <Text color="black">Chat in 2 days</Text>
            </HStack>

            <Action title={"Prepare Questions"} subtitle={'Make changes to curated questions or add your own'} onPress={onPress}></Action>

            <FocusAreaContainer></FocusAreaContainer>
            
          </VStack>
      </SafeAreaView>
      </>
    );
}


export default ParentContainer
