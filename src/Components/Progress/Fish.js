import React, {useEffect, useState, useReducer} from 'react';
import {Flex, Text, Image, Button, Spacer} from 'native-base';
import FishIcon from '@/Assets/fish.png';
const Fish = () => {

    return (
        <Flex bg='white' borderRadius='30' align='center' justify='center' w={150} h={[8, 12, 16]}>
            <Flex borderWidth={3} 
                borderColor='blue.700' 
                bg='blue.100'
                borderRadius='30'
                w='94%'
                h='88%'
                direction='row'
                justify='flex-end'
                align='center'
                pr='4'
            >
                <Text mr='3'>9</Text>
                <Image source={FishIcon} alt='fish' size='sm'/>
            </Flex>
        </Flex>
    )
}

export default Fish;