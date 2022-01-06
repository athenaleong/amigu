import {Fab, Button, Pressable, Flex, Image, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import Fish from '@/Components/Progress/Fish.js';
import NavButton from '@/Components/NavButton/NavButton';

export const TopBar = (props) => {

    const height = [12, 16, 20, 24, 32];

    const margin = {base: 8, lg: 12, xl: 16};
    
    return (
        <Flex bg='amber.400' position='absolute' w="100%" h={height} direction='row' align='center' justify='space-between' m={margin}>
            <NavButton variant='parent'></NavButton>
            <>
            <Fish></Fish>
            </>
        </Flex>
    )
}
