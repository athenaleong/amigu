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
import { navigateAndSimpleReset, navigate } from '@/Navigators/utils';
import { FabComponent } from '@/Components/Fab';
import { TopBar } from '@/Components/TopBar'
import { LeftBar } from '@/Components/LeftBar';
import {ImageBackground, StyleSheet} from 'react-native';
import Background from '@/Assets/background/treehouse-background.jpeg'
import { ImageSize } from '@/Config/penguinConfig.js'
import { Audio } from 'expo-av';
import {BackgroundMusic} from '@/Components/Audio'
import {Animated} from 'react-native'
import {getData} from '@/Services/AsyncStorage';




// Starting container for an adventure
const PetContainer = (props) => {

    const [numAdventures, setNumAdventures] = useState(0);

    async function onPress() {
        console.log('hello')
        navigate('Adventure')
    }

    useLayoutEffect(() => {
        (async() => {
            let numAdventures = await getData('@frontend:numAdventures');
            setNumAdventures(parseInt(numAdventures))
        })();
    }, [])

    return (
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <SafeAreaView>
            <Flex h='100%' w='100%'>
                {/* <FabComponent /> */}
                <Flex h='100%' w='100%' direction='column' align='center' justify='center'>
                    <Image source={Still} variant={ImageSize} alt='penguin'></Image>

                    {numAdventures === 0 && 
                        <Button onPress={onPress}>Say Hi</Button>
                    }
                </Flex>
                <LeftBar />
                <TopBar leftItems={['parent']}/>
            </Flex> 
            
        </SafeAreaView>
        <BackgroundMusic file='@/Assets/music/Calm-Forest-Birds.mp3'/>
        
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