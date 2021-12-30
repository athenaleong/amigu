import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
    Text,
    Flex,
    Image,
    Button
} from 'native-base';
import still from '@/Assets/still.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigateAndSimpleReset } from '@/Navigators/utils';

// Starting container for an adventure
const PetContainer = (props) => {
    function onPress() {
        navigateAndSimpleReset('Adventure')
    }

    return (
        <SafeAreaView>
            <Flex direction='column' align='center'>
                <Flex>
                    <Image source={still} size='2xl' alt='penguin'></Image>
                </Flex>
                <Button onPress={onPress}> Go on Adventure </Button>
            </Flex>
        </SafeAreaView>
    )
}

export default PetContainer