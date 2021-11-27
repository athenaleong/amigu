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
import { getMultiple } from "@/Services/AsyncStorage";

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

    const onPress = () => {
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
