import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button
} from 'native-base'

const DialogueView = (props) => {
    
    const {chat, petType} = props;
    return (
        <>
        <Image size='2xl' source={petType} alt='image' key={petType}/>
        <Flex p='4' bg='white' m='4' borderRadius='30'>
            <Text variant='title'>{chat} {petType}</Text>
        </Flex>
        </>
    )
}

export default DialogueView