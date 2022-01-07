import React, {useEffect, useState, useReducer} from 'react'
import {
    Flex,
    Text,
    Image,
    Button,
    Spacer
} from 'native-base'
import { ImageBackground, StyleSheet } from 'react-native';
import Background from '@/Assets/background/background.png';
import { ImageSize } from '@/Config/penguinConfig.js'
import {margin} from '@/Config/dynamicConfig.js';
import Still from '@/Assets/still.png';

const DialogueView = (props) => {


    
    const {chat, petType} = props;
    return (
        <ImageBackground source={Background} resizeMode='cover' style={styles.image} h='100%' w='100%'>
            <Flex direction='column' align='center' justify='space-between' h='100%' w='100%' p={margin}>
                <Spacer/>
                <Image variant={ImageSize} source={Still} alt='image' key={petType}/>
                <Flex p='4' bg='beige.100' m='4' borderRadius='30' w='100%' h={['35%','35%','35%', '25%', '25%']}  borderColor='beige.400' borderWidth='10'>
                    <Text variant='subtitle'>{chat} {petType}</Text>
                </Flex>
            </Flex>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})

export default DialogueView