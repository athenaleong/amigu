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
  Flex
} from "native-base";
import FocusAreaBubble from "@/Components/FocusAreaBubble";
import * as data from '@/Assets/Category.json';

const FocusAreaContainer = () => {
    const category = data.category;

    return (
        <VStack alignItems="center">
            <Flex direction="row" justify="space-between" w='80'>
                <Text color="black" variant="title">Focus Area</Text>
                <Button>Edit</Button>
            </Flex>
            {/* Area for Focus Area Button */}
            <Flex
                direction="row"
                justify="flex-start"
                w='80'
                wrap='wrap'
            >
            {
                category.map(c => 
                    <FocusAreaBubble key={c} text={c}/>)
            }
            </Flex>
        </VStack>
    )
}

export default FocusAreaContainer