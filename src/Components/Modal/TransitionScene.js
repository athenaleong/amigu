import React, {useEffect, useRef, useState} from "react"
import {
  Modal,
  Text,
  Flex,
  Image
} from 'native-base';
import { View} from 'react-native';
import Wave from '@/Assets/wave.gif';
import Waddle from '@/Assets/penguin/Waddle.gif';
import Waddle2 from '@/Assets/penguin/Waddle2.gif';
import { Animated, Easing, Dimensions, ImageBackground } from 'react-native';
import Background from '@/Assets/background/under-the-sea.jpeg'
import { justifyContent, width } from "styled-system";
import {BackgroundMusic} from '@/Components/Audio'
import { Audio } from 'expo-av';


//Create Custom Components for Animation 
const AnimatedBackground = Animated.createAnimatedComponent(ImageBackground)
const AnimatedFlex = Animated.createAnimatedComponent(Flex)


const customIndicator = () => {
    return (
        <Image source={Wave} size='2xl' alt='waving'/>
    )
}

const TransitionScene = (props) => {
    const translation = new Animated.Value(0);
    const [sound, setSound] = useState(new Audio.Sound());
    const musicFile = require('@/Assets/music/Cheerful-Whistle-Trim.mp3');

    const {onPress} = props;


    useEffect(() => {
        const translate = () => {
        translation.setValue(0);
        Animated.timing(translation, {
            toValue: 1000,
            duration: 8000,
            easing: Easing.linear,
            useNativeDriver:true,
        }).start(async () => {
            onPress();
            sound && await sound.unloadAsync();

        });
        };

    
        translate();
    }, []);

    const translateAnimation = translation.interpolate({
        inputRange: [0, 100],
        outputRange: [-20, 120],
    });

    return (
        <Flex h='100%' w='100%' justifyContent='center' backgroundColor='black'>
        <AnimatedBackground     
                source={Background}
                resizeMode='contain'
                style={{
                    height:'100%',
                    width:'100%',
                    transform: [
                        // {translateX: translateAnimation},
                    ]
                }}
        > 
        
        <Flex h='100%' w='100%' justifyContent='center'>
            <AnimatedFlex
                justify='center'
                align='flex-start'
        
            style={{
                height:'100%',
                width:'100%',
                transform: [
                    {translateX: translateAnimation},
                ]
            }}
            >
            <Image 
                source={Waddle} 
                alt='waddling'
                w='25%'
                resizeMode='contain'
                mt='100'
                
            />
            </AnimatedFlex>
        </Flex>
        <BackgroundMusic file={musicFile} sound={sound}/>
        </AnimatedBackground>
        </Flex>


 
    )
}

export default TransitionScene