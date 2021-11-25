import React from "react";
import {
    Flex,
    IconButton,
    Text,
    Icon
} from 'native-base'
import { Ionicons } from '@expo/vector-icons';

const AddQuestionBubble = (props) => {
    const {onPress} = props;

    return (
        <Flex 
            direction="row" 
            bg={"coolGray.300"} 
            rounded='30' 
            px='3'
            my='1'
            h='32' 
            align='center'
            justify='center'>
            
            <Icon as={Ionicons} 
                name="ios-add" 
                onPress={() => onPress()}
                color='white'
            />
        </Flex>
    )
}

export default AddQuestionBubble