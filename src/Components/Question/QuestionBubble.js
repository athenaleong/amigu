import React from "react";
import {
    Flex,
    IconButton,
    Text,
    Icon
} from 'native-base'
import { Entypo, EvilIcons } from '@expo/vector-icons';


const QuestionBubble = (props) => {
    const {color, category, question, edit, deleteOnPress} = props

    if (!edit) { 
        return(
        <Flex 
            direction="column" 
            bg={color} 
            rounded='30' 
            py='6'
            px='8'
            my='1'
            h='32'
            w='80%' 
            align='center'
            justify='center'
            >
            <Text color='black' variant='robotoSubtitle'>{question}</Text>
            {/* <Flex justify='flex-end'>
                <Text color='black' variant='subtitle' textAlign='right'>{category.toUpperCase()}</Text>
            </Flex> */}
        </Flex>)
    }
    else {
        return(
        <Flex 
            direction="row" 
            bg={color} 
            rounded='30' 
            px='3'
            my='1'
            py='1'
            h='32' 
            w='80%' 
            align='center'
            justify='space-between'
        >
            
            <Flex direction='column' justify='center'>
                <IconButton
                icon={<Icon as={EvilIcons} name="navicon"/>}
                />
            </Flex>
            
            <Flex direction='column' w='60%' h='100%' py='6' justify='center'>
                <Text color='black' variant='robotoSubtitle'>{question}</Text>
                {/* <Flex justify='flex-end'>
                    <Text color='black' variant='subtitle' textAlign='right'>{category.toUpperCase()}</Text>
                </Flex> */}
            </Flex>

            <Flex direction='column' justify='flex-start' h="100%">
                <IconButton
                    icon={<Icon as={Entypo} 
                                name="cross"/>}
                    onPress={deleteOnPress}
                />
            </Flex>
        </Flex>
        )}

}

export default QuestionBubble