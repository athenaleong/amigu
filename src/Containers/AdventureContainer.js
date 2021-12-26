import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
    Text,
    Flex,
    Image,
    Button
} from 'native-base';
import still from '@/Assets/still.png'
import { SafeAreaView } from 'react-native-safe-area-context';


const AdventureContainer = (props) => {

    return (
        <SafeAreaView>
            <Flex direction='column' align='center'>
                <Flex>
                    <Image source={still} size='2xl' at='penguin'></Image>
                </Flex>
                <Button> Go on Adventure </Button>
            </Flex>
        </SafeAreaView>
    )
}

export default AdventureContainer