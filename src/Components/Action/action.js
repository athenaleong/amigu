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
import {AntDesign,Ionicons} from '@expo/vector-icons'

const Action = (props) => {
    const {title, subtitle, onPress} = props
    return (
        <Pressable onPress={onPress}>
            <Flex
                direction="column"
                align="center"
                justify="center"
                h='40'
                w='80%'
                bg="white"
                p="6" ic
                rounded="24"
            >
                <Icon 
                    as={Ionicons} 
                    name="heart"
                    color="danger.400"
                    mb='3'
                />
                <Text
                    color="trueGray.900"
                    variant="subtitleL"
                > {title}</Text>
                <Text
                    color="trueGray.700"
                    variant="subtitleLight"     
                >{subtitle}</Text>
            </Flex>
        </Pressable>
    )
}

export default Action