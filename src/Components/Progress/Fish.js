import React, {useEffect, useState, useReducer, useLayoutEffect} from 'react';
import {Flex, Text, Image, Button, Spacer} from 'native-base';
import FishIcon from '@/Assets/fish.png';
import { getData } from '@/Services/AsyncStorage';


const Fish = () => {

    const [fish, setFish] = useState(0);

    useLayoutEffect(() => {
        (async() => {
            let numFish = await getData('@frontend:numFish');
            setFish(numFish);
        })();
    })

    return (
        <Flex borderWidth={6} borderColor='white' bg='white' borderRadius='30' align='center' justify='center' w={150} h={[8, 12, 16]}>
            <Flex borderWidth={5} 
                borderColor='lightBlue.500' 
                bg='lightBlue.400'
                borderRadius='30'
                direction='row'
                justify='flex-end'
                align='center'
                pr='4'
                width="100%"
                height="100%"
            >
                <Text mr='3' variant='subtitleL' color='white'>{fish}</Text>
                <Image source={FishIcon} alt='fish' size='sm'/>
            </Flex>
        </Flex>
    )
}

export default Fish;