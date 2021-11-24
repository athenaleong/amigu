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

// const LoginContainer = () => {

//   return (
//     <Center
//     _dark={{ bg: "blueGray.900" }}
//     _light={{ bg: "blueGray.50" }}
//     px={4}
//     flex={1}
//     >
//     <VStack space={5} alignItems="center">
//         <Heading size="lg">Welcome to NativeBase</Heading>
//         <HStack space={2} alignItems="center">
//         <Text>Edit</Text>
//         <Code>App.js</Code>
//         <Text>and save to reload.</Text>
//         </HStack>
//         <Link href="https://docs.nativebase.io" isExternal>
//         <Text color="primary.500" underline fontSize={"xl"}>
//             Learn NativeBase
//         </Text>
//         </Link>
//     </VStack>
//     </Center>
//   );
// }

const TestContainer = () => {
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



export default TestContainer
