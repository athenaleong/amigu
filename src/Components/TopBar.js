import {Fab, Button, Pressable, Flex, Image, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import Fish from '@/Components/Progress/Fish.js';
import NavButton from '@/Components/NavButton/NavButton';
import {margin} from '@/Config/dynamicConfig.js';

export const TopBar = (props) => {

    const {leftItems, rightItems} = props;
    const height = [12, 16, 20, 24, 32];
    // const margin = {base: 8, lg: 12, xl: 16};
    
    return (
        <Flex position='absolute' width="100%" direction='row' align='center' justify='space-between' px={margin} pt={margin}>
            <Flex direction='row' align='center' justify='flex-start'>
                {leftItems.map((item, index) => {
                    return (
                        <NavButton variant={item} key={index}></NavButton>
                    )
                })}
            </Flex>
            <>
            <Fish></Fish>
            </>
        </Flex>
    )
}
