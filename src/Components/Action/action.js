import React from "react"
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Icon,
  NativeBaseProvider,
} from "native-base"
import {AntDesign} from '@expo/vector-icons'

const Action = (props) => {
    const {title, subtitle, onPress} = props
    return (
        <Pressable onPress={onPress}>
            <Flex
                direction="column"
                align="center"
                h='40'
                w='80'
                bg="teal.400"
                p="6"
                rounded="24"
            >
                <Icon 
                    as={AntDesign} 
                    name="android1"
                    color={"trueGray.100"}
                />
                <Spacer/>
                <Text
                    color="white"
                    variant="title"
                > {title}</Text>
                <Text
                    color="white"
                    variant="subtitle"     
                >{subtitle}</Text>
            </Flex>
        </Pressable>
    )
}

export default Action