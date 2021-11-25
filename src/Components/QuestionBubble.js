import React from "react";
import {
    Flex,
    Text
} from 'native-base'

const QuestionBubble = (props) => {
    const {color, category, question} = props
    return (
        <Flex 
            direction="column" 
            bg={color} 
            rounded='30' 
            py='6'
            px='8'
            my='1'
            h='32' 
            align='center'>
            <Text color='black' variant='subtitleL'>{question}</Text>
            <Flex justify='flex-end'>
                <Text color='black' variant='subtitle' textAlign='right'>{category.toUpperCase()}</Text>
            </Flex>
        </Flex>
    )
}

export default QuestionBubble