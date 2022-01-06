import {Fab, Button, Pressable, Flex, Image} from 'native-base';
import React, {useState, useEffect} from 'react';
import Boba from '@/Assets/bubble-tea.png';

export const FabComponent = (props) => {

    return (
        <Flex position='absolute' bg='amber.100' w={40} h={40}>
            <Image source={Boba} alt="bubble-tea" w="100%" h="100%"/>
        </Flex>
    )
}



