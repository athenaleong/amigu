import React, {useLayoutEffect, useState, useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
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
import { Audio } from 'expo-av';

// Starting container for an adventure
const PetContainer = (props) => {

    const [sound, setSound] = React.useState();

    async function onPress() {
        navigateAndSimpleReset('Adventure')
    }

    useEffect(() => {
        (async() => {
            const initialStatus = {isLooping: true}
            const { sound } = await Audio.Sound.createAsync(
                require('@/Assets/music/Calm-Forest-Birds.mp3'),
                initialStatus
            );
            setSound(sound);

            console.log('Playing Sound');
            await sound.playAsync(); 

            
        })();

        return sound 
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); }
            : console.log('hey');
    },[])

    // useFocusEffect(
    //     useCallback(() => {
    //         (async() => {
    //             const initialStatus = {isLooping: true}
    //             const { sound } = await Audio.Sound.createAsync(
    //                 require('@/Assets/music/Calm-Forest-Birds.mp3'),
    //                 initialStatus
    //             );
    //             setSound(sound);

    //             console.log('Playing Sound');
    //             console.log(sound)
    //             await sound.playAsync(); 
    //             console.log('hey')
    //         })();

    //         return sound ? () => {
    //             console.log('Unloading Sound');
    //             sound.unloadAsync(); }
    //         : () => {console.log(sound)}

    //     }, [])
    // );

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