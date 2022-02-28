import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button,
    Spacer,
    Fab
} from 'native-base'
import { ImageBackground, StyleSheet } from 'react-native';
import Background from '@/Assets/background/fish-background.jpeg';
import { ImageSize } from '@/Config/penguinConfig.js'
import {margin} from '@/Config/dynamicConfig.js';
import Still from '@/Assets/still.png';
import TypeWriter from 'react-native-typewriter'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';
import {BackgroundMusic} from '@/Components/Audio'
import { Audio } from 'expo-av';



const DialogueView = (props) => {


    const { width, height } = Dimensions.get('window'); 
    const {chat, petType, backgroundImage, onPress} = props;
    const [typed, setTyped] = useState(false);

    const [sound, setSound] = useState(new Audio.Sound());
    const musicFile = require('@/Assets/music/Chirp.mp3');

    function onTypingEnd() {
        setTyped(true);
    }

    useEffect(() => {
        //TODO: change this to false 
        setTyped(false);   
    },[chat])

    async function nextOnPress() {
        onPress();
        await sound.replayAsync(); 
    }

    return (
        <ImageBackground source={backgroundImage} resizeMode='stretch' style={styles.image} h='100%' w='100%'>
            <Flex direction='column' align='center' justify='space-between' h='100%' w='100%' p={margin}>
                <Spacer/>
                <Image variant={ImageSize} source={petType} alt='image' key={petType}/>
                <Flex wrap='wrap' p='4' bg='beige.100' m='4' borderRadius='30' w='100%' h={['35%','35%','35%', '25%', '25%']}  borderColor='beige.400' borderWidth='10'>
                    <TypeWriter style={styles.text} typing={1} onTypingEnd={onTypingEnd}>{chat}</TypeWriter>
                    {/* <Text variant='subtitle'> {petType}</Text> */}
                    
                </Flex>
                {typed && <Fab variant='next' onPress={nextOnPress}/>}
            </Flex>
            <BackgroundMusic file={musicFile} sound={sound}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
    text: {
        fontSize: RFValue(28, 1194),
        fontFamily: 'BalooDa2_500Medium'
    }
})



export default DialogueView