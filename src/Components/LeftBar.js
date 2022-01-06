import {Fab, Button, Pressable, Flex, Image, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import NavButton from '@/Components/NavButton/NavButton';

export const LeftBar = (props) => {

    const marginLeft = {base: 8, lg: 12, xl: 16};

    return (
        <Flex position='absolute' w={[8, 12, 16, 24, 32]} h='100%' direction='column' align='center' justify='flex-end' ml={marginLeft}>
            <NavButton variant='photo'></NavButton>
            <NavButton variant='treasure'></NavButton>
        </Flex>
    )

}
