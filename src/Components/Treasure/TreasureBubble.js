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
import Question from '@/Assets/question-mark.png'
import { TouchableOpacity, Pressable} from 'react-native';

const TreasureBubble = (props) => {
    
    const {data, display, onPress} = props;
    // const source = data.exists ? {'uri': data.url} : Question

    return (
        <Flex
            h='40' 
            w='40'
            bg='coolGray.200'
            rounded='30'
            align='center'
            justify='center'
            m='3'
        >
            <Image
                source= {display? {'uri': data.url} : Question}
                alt='Wave'
                size='xl'
                key={display}
            />
            {display && <Text>
                {data.name}
            </Text>}
        </Flex>
    )
}

export default TreasureBubble