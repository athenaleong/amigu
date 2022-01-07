import React, {useEffect, useState, useReducer} from 'react';
import {Fab, Button, Pressable, Flex, Image, Text, useBreakpointValue} from 'native-base';
import { SvgWithCssUri } from 'react-native-svg';

import House from '@/Assets/navButton/house.png';
import Parent from '@/Assets/navButton/parent.png';
import Photograph from '@/Assets/navButton/photograph.png';
import Treasure from '@/Assets/navButton/treasure.png';
import { navigateAndSimpleReset } from '@/Navigators/utils';


const NavButtons = (props) => {

    function onPress() {
        switch (props.variant) {
            case 'home':
                navigateAndSimpleReset('Pet')
                break;
            case 'parent':
                navigateAndSimpleReset('Parent')
                break;
            case 'treasure':
                navigateAndSimpleReset('Mall')
                break;
            default:
                break;

        }
    }

    const width = [12, 16, 20, 24, 32];
    const height = [12, 16, 20, 24, 32];

    switch(props.variant) {
        case 'home':
            return (
                <Pressable  onPress={onPress}>
                    <Image source={House} h={height} w={width} alt="To Home"></Image>
                </Pressable>
            )
        case 'parent':
            return (
                <Pressable onPress={onPress} borderRadius={60} h={height} w={width} p={1} bg='white'>
                    <Image source={Parent}  alt="To Parent" h='100%' w='100%'></Image>
                </Pressable>
            )
        case 'mall':
            return (
                <Pressable>
                </Pressable>
            )
        case 'photo':
            return (
                <Pressable onPress={onPress}>
                    <Image source={Photograph} h={height} w={width} alt="To Photo"></Image>
                </Pressable>
            )
        case 'treasure':
            return (
                <Pressable onPress={onPress}>
                    <Image source={Treasure} h={height} w={width} alt="To Treasure"></Image>
                </Pressable>
            )
        default:
            return null

            
    }

}

export default NavButtons