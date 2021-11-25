import React from "react";
import {
    Flex,
    IconButton,
    Text,
    Icon
} from 'native-base'
import { Entypo } from '@expo/vector-icons';

const EditQuestionBubble = (props) => {
    const {color, category, question, onPress} = props

    return (
        <Flex 
            direction="row" 
            bg={color} 
            rounded='30' 
            px='3'
            my='1'
            h='32' 
            align='center'
            justify='space-evenly'>
            
            <Flex direction='column' justify='space-evenly'>
                <IconButton
                icon={<Icon as={Entypo} name="chevron-up" onPress={onPress(true)}/>}
                />
                <IconButton
                icon={<Icon as={Entypo} name="chevron-down" onPress={onPress(false)}/>}
                />
            </Flex>
            
            <Flex direction='column' w='80%' h='100%' py='6'>
                <Text color='black' variant='subtitleL'>{question}</Text>
                <Flex justify='flex-end'>
                    <Text color='black' variant='subtitle' textAlign='right'>{category.toUpperCase()}</Text>
                </Flex>
            </Flex>

            <Flex direction='column' justify='flex-start' h="100%">
                <IconButton
                    icon={<Icon as={Entypo} name="cross" />}
                />
            </Flex>
        </Flex>
    )
}

export default EditQuestionBubble