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
import Background from '@/Assets/background/background.png';
import { ImageSize } from '@/Config/penguinConfig.js'
import {margin} from '@/Config/dynamicConfig.js';
import Still from '@/Assets/still.png';
import TypeWriter from 'react-native-typewriter'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';

const DialogueView = (props) => {


    const { width, height } = Dimensions.get('window'); 
    const {chat, petType} = props;
    const [typed, setTyped] = useState(false);

    function onTypingEnd() {
        setTyped(true);
    }

    useEffect(() => {
        setTyped(false);
    },[chat])

    return (
        <ImageBackground source={Background} resizeMode='cover' style={styles.image} h='100%' w='100%'>
            <Flex direction='column' align='center' justify='space-between' h='100%' w='100%' p={margin}>
                <Spacer/>
                <Image variant={ImageSize} source={petType} alt='image' key={petType}/>
                <Flex p='4' bg='beige.100' m='4' borderRadius='30' w='100%' h={['35%','35%','35%', '25%', '25%']}  borderColor='beige.400' borderWidth='10'>
                    <TypeWriter style={styles.text} typing={1} onTypingEnd={onTypingEnd}>{chat}</TypeWriter>
                    {/* <Text variant='subtitle'> {petType}</Text> */}
                    
                </Flex>
                {typed && <Fab variant='next' onPress={props.onPress}/>}
            </Flex>
            
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