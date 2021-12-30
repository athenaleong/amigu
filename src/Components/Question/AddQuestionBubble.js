import React from "react";
import {
    Flex,
    IconButton,
    Text,
    Icon
} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const AddQuestionBubble = (props) => {
    const {onPress} = props;

    return (
        <TouchableOpacity onPress={() => onPress()}>
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
        </TouchableOpacity>
    )
}

export default AddQuestionBubble