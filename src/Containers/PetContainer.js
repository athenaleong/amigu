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
import Background from '@/Assets/background/background.png'
import { ImageSize } from '@/Config/penguinConfig.js'

// Starting container for an adventure
const PetContainer = (props) => {
    function onPress() {
        navigateAndSimpleReset('Adventure')
    }


    return (
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <SafeAreaView>
            <Flex h='100%' w='100%'>
                {/* <FabComponent /> */}
                <Flex h='100%' w='100%' direction='column' align='center' justify='center'>
                    <Image source={Still} variant={ImageSize} alt='penguin'></Image>
                    <Button onPress={onPress}> Start Adventure</Button>
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