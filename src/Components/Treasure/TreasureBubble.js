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
import { TouchableOpacity, Pressable, ImageStore} from 'react-native';
import {ImageSizeNum} from '@/Config/dynamicConfig.js'

const TreasureBubble = (props) => {
    
    const {data, display, onPress, bg, question} = props;
    // const source = data.exists ? {'uri': data.url} : Question

    const height = [90, 100, 120, 150, 160]
    const width = [90, 100, 120, 150, 160]

    return (
        <Flex
            w={width}
            h={height}
            bg={bg}
            rounded='30'
            align='center'
            justify='center'
            m='3'
        >
            <Image
                source= {display? {'uri': data.url} : question}
                alt='Wave'
                size='80%'
                key={display}
            />
            {display && <Text>
                {data.name}
            </Text>}
        </Flex>
    )
}

export default TreasureBubble