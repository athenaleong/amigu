import React from "react";
import {
    Flex,
    IconButton,
    Text,
    Icon
} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet} from "react-native";

const AddQuestionBubble = (props) => {
    const {onPress} = props;

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Flex 
                direction="row" 
                bg={"coolGray.300"} 
                rounded='30' 
                px='3'
                my='1'
                h='32' 
                align='center'
                justify='center'
            >
                
                <Icon as={Ionicons} 
                    name="ios-add" 
                    onPress={() => onPress()}
                    color='white'
                />
            </Flex>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%'
    }
  });

export default AddQuestionBubble