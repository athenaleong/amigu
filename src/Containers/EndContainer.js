import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    Flex,
    Text,
    Image,
    Button
} from 'native-base'
import { navigateAndSimpleReset } from '@/Navigators/utils'

// Last Container on an adventure
const EndContainer = (props) => {

    function onPress() {
        navigateAndSimpleReset('Pet')
    }


    return (
        <SafeAreaView>
            <Flex h='100%' w='100%' bg='primary.300' justify='space-evenly'>
                <Button onPress={onPress}>Go back to Home</Button>
            </Flex>
        </SafeAreaView>
        
    )
}

export default EndContainer