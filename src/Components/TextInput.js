import React, {useEffect, useState, useReducer, useLayoutEffect} from 'react'
import {
    Flex,
    Text,
    Button,
    Input,
    Spacer
} from 'native-base'
import {KeyboardAvoidingView, Platform} from 'react-native'
import { storeData } from '@/Services/AsyncStorage';



const TextInput = (props) => {

    const {question, placeholder, asyncStorageName, onPress} = props;

    const [name, setName] = useState('');

    async function onSubmit() {
        if (name.length > 0) {
            console.log('submitted')
            await storeData(asyncStorageName, name)
            onPress();
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <Flex justify='center' align='center' h='100%'>
            <Flex w='50%' align='center'>
                <Text variant='subtitleXL' mb={4}>{question}</Text>
                <Input w='100%' h='32' fontSize='64' variant='name' placeholder={placeholder} onChangeText={value => setName(value)}  mb={6}/>
                <Button onPress={onSubmit}>Submit</Button>
            </Flex>
        </Flex>
        </KeyboardAvoidingView>
    )
}

export default TextInput