import React, {useEffect} from "react"
import {
  Modal,
  Text,
  Image,
  Flex
} from 'native-base';
import Wave from '@/Assets/wave.gif';
import Waddle from '@/Assets/penguin/Waddle.gif';
import Waddle2 from '@/Assets/penguin/Waddle2.gif';
import { Animated, Easing, Dimensions, ImageBackground } from 'react-native';
import Background from '@/Assets/background/under-the-sea.jpeg'
const AnimatedBackground = Animated.createAnimatedComponent(ImageBackground)

const customIndicator = () => {
    return (
        <Image source={Wave} size='2xl' alt='waving'/>
    )
}

const TransitionScene = (props) => {

    const translateValue = new Animated.Value(0);
    const {onPress} = props;


    useEffect(() => {
        const translate = () => {
        translateValue.setValue(0);
        Animated.timing(translateValue, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
        }).start(() => onPress());
        };

        if (onPress) {
         translate();
        }
    }, [translateValue]);

    const translateAnimation = translateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-290, 290],
    });



    return (
        <AnimatedBackground     
                source={Background}
                resizeMode='cover'
                style={{
                    height:'100%',
                    transform: [
                        {translateX: translateAnimation,},
                    
                    ]
                }}
        > 
        <Flex align='center' justifyContent='center' w='100%' h='100%'>
            <Image source={Waddle} size='2xl' alt='waddling'/>
        </Flex>
        </AnimatedBackground>


 
    )
}

export default TransitionScene