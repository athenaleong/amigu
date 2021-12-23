import React, {useState, useEffect, useLayoutEffect} from "react";
import {
    Text,
    Flex,
    ScrollView,
    Button,
    Image
} from "native-base"
import Boba from '@/Assets/bubble-tea.png'
import Wave from '@/Assets/wave.gif'
import WavePng from '@/Assets/wave-png.png'
import WaveShort from '@/Assets/wave-short.gif'
import WaveLottie from '@/Assets/wave.mp4.lottie.json'
import LottieView from 'lottie-react-native';
import { TouchableOpacity, Pressable} from 'react-native';

const TreasureBubble = (props) => {
    
    const {imageUri} = props;
    return (
        <Flex
            h='48' 
            w='48'
            bg='coolGray.200'
            rounded='30'
            align='center'
            justify='center'
        >
            <Image
                source={{uri: {imageUri}}}
                alt='Wave'
                size='xl'
            />
            <Text>
                Boba
            </Text>
        </Flex>
    )
}

export default TreasureBubble