import React from "react";
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
} from "native-base";

const HomeContainer = () => {
    return (
        <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
        >
            <VStack space={5} alighnItems = "center">
                <Text>Hello</Text>
                <Text>World</Text>
            </VStack>
        </Center>
    )
}



export default HomeContainer
