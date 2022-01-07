import {Fab, Button, Pressable, Flex, Image, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import NavButton from '@/Components/NavButton/NavButton';
import {margin} from '@/Config/dynamicConfig.js';

export const LeftBar = (props) => {

    return (
        <Flex position='absolute' w={[8, 12, 16, 24, 32]} h='100%' direction='column' align='center' justify='flex-end' ml={margin}>
            <NavButton variant='photo'></NavButton>
            <NavButton variant='treasure'></NavButton>
        </Flex>
    )

}
