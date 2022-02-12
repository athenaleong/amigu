import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button,
    Spacer,
    Fab
} from 'native-base'
import FishIcon from '@/Assets/fish.png'


const RewardBar = (props) => {
 
    const {amount, petName} = props;

    return (
        // <Flex direction='row' bg='rose.500' justify='center' align='center' borderRadius='30' py='2' w='400' >
        //     <Image source={FishIcon} alt='fish' size='sm'/>
        //     <Flex direction='column'>
        //         <Text variant='subtitle' color='white'>{petName} gained</Text>
        //         <Text variant='subtitleL' color='white'>+{amount} fish</Text>
        //     </Flex>
        // </Flex>

        <Flex direction='row' justify='center' align='center' borderRadius='30' py='2' w='400' >
            <Image source={FishIcon} alt='fish' size='sm' mx='4'/>
            <Text variant='subtitleXL' color='white'>{petName} gained</Text>
            <Text variant='subtitleXL' color='white'> {amount} fish</Text>
        </Flex>
    )
}

export default RewardBar