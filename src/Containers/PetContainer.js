import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
    Text,
    Flex,
    Image,
    Button,
} from 'native-base';
import Still from '@/Assets/still.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigateAndSimpleReset } from '@/Navigators/utils';
import { FabComponent } from '@/Components/Fab';
import { TopBar } from '@/Components/TopBar'
import { LeftBar } from '@/Components/LeftBar';
import {ImageBackground, StyleSheet} from 'react-native';
import Background from '@/Assets/background/treehouse-background.jpeg'
import { ImageSize } from '@/Config/penguinConfig.js'
import { Peaceful } from '@/Components/Sound.js';

// Starting container for an adventure
const PetContainer = (props) => {


    function onPress() {
        navigateAndSimpleReset('Adventure')
    }

    useEffect(() => {
        Peaceful.play();
    })

    return (
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <SafeAreaView>
            <Flex h='100%' w='100%'>
                {/* <FabComponent /> */}
                <Flex h='100%' w='100%' direction='column' align='center' justify='center'>
                    <Button onPress={onPress}> Start Adventure</Button>
                    <Image source={Still} variant={ImageSize} alt='penguin'></Image>
                </Flex>
            </Flex> 
            <LeftBar />
            <TopBar leftItems={['parent']}/>
        </SafeAreaView>
        
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})

export default PetContainer